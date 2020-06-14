import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { INSERT_UNIFORM_TITLE } from '@/graphql/mutations/admin/authorities/uniform_title.mutations';
import Router from "next/router";
const useCategoryForm = (callback) => {


    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        type: 10,
        nature: 10,
        name: "name",
        expression_of: [],
        has_expression: [],
        other_links: [],
        authors: [],
        interpreters: [],
        form_of_work_text: "FormOfWorkText",
        form_of_work_id: "5ed6021e538de5df3857bd9f",
        date_of_work: new Date(),
        original_place_of_work: "OriginalPlaceOfWork",
        subject_of_work: "SubjectOfWork",
        targeted_completeness: 0,
        targeted_audience: "TargetedAudience",
        history_of_work: "HistoryOfWork",
        // context_of_work: "",
        medium_of_performance: [],
        numeric_designation: [],
        key_text: "KeyText",
        key_id: "5ed6021e538de5df3857bd9f",
        coordinate_system: "CoordinateSystem",
        equinox: "Equinox",
        form_subdivision: [],
        other_features: "OtherFeatures",
        comment: "Comment",
        url_thumbnail: "UrlThumbnail",
        linked_authorities: [],

    })


    const setInputValue = (newInputs) => {
        setInputs({
            Name: newInputs.name,
            Scope_note: newInputs.scope_note,
            Comment: newInputs.comment,
            Broader_term: {
                id: newInputs.broader_term._id.split('"')[1],
                Label: newInputs.broader_term.name
            },
            See: {
                id: newInputs.see._id.split('"')[1],
                Label: newInputs.see.name
            },
            See_also: newInputs.see_also.map((category) => {
                return {
                    id: category._id.split('"')[1],
                    AuthorityName: category.name
                }
            }),
            Authority_number: newInputs.authority_number,
            URL_thumbnail: newInputs.url_thumbnail,
            Linked_authorities: newInputs.linked_authorities.map((linked_authority) => {

                return {
                    AuthorityName: "something",
                    Authority_Type: Number(linked_authority.linked_authority_type),
                    Comment: linked_authority.comment,
                    End: linked_authority.end && linked_authority.end > 0 && new Date(Number(linked_authority.end)),
                    Start: linked_authority.start && linked_authority.start > 0 && new Date(Number(linked_authority.start)),
                    id: linked_authority._id,
                }
            }),
        });
    }
    // *********** Handeling list of strings***************************//

    const HandlePropertyChange = (propertyName, newValue) => {
        setInputs(inputs => ({ ...inputs, [propertyName]: newValue }));
    }
    const DeleteAtIndex = (propertyName, index) => {
        const mutatedProperty = [...inputs[propertyName]]
        mutatedProperty.splice(index, 1)
        setInputs(inputs => ({ ...inputs, [propertyName]: mutatedProperty }));
    }
    const AddString = (propertyName) => {
        const mutatedProperty = [...inputs[propertyName]]
        mutatedProperty.push("")
        setInputs(inputs => ({ ...inputs, [propertyName]: mutatedProperty }));
    }
    // *************************************************************//


    // Handle the state changes of the inputs using the name property
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    // Handle state change of the authority links
    const OnAuthorityLinkChange = (index, authorityLink) => {
        const Linked_authoritiesMutated = [...inputs.Linked_authorities]
        Linked_authoritiesMutated[index] = authorityLink
        setInputs(inputs => ({ ...inputs, Linked_authorities: Linked_authoritiesMutated }));
    }
    // a state containing which callback will be used when an authority is selected in the modal
    const [HandleChosenAuthority, setHandleChosenAuthority] = useState(() => console.log("called"))

    // a state containing which authity type is seleced in the modal
    const [ModalAuthorityType, setModalAuthorityType] = useState(0)

    // State of the modal
    const [open, setOpen] = React.useState(false);

    // if the modal is opened to add authority links
    const handleOpen = (authorityType, HandleChoosenAuthority, ) => {
        setModalAuthorityType(authorityType)
        setHandleChosenAuthority(() => HandleChoosenAuthority)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [insertUniformTitle] = useMutation(INSERT_UNIFORM_TITLE, {
        onCompleted: () => {
            Router.push("/admin/authorities/uniform_title")
        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = () => {
        const uniformTitle = inputs
        console.log("uniformTitle",uniformTitle);
        insertUniformTitle({
            variables: {
                UniformTitle: uniformTitle
            }
        });
        
    }
    return {
        inputs,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        open,
        onAddHandler,
        setInputValue,
        HandlePropertyChange,
        DeleteAtIndex,
        AddString
    };
}

export default useCategoryForm 