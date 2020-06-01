import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { INSERT_CATEGORY } from '../../../../graphql/mutations/admin/authorities/category.mutations';
import { Router } from "next/router";
const useCategoryForm = (callback) => {


    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        Type: 6,
        Nature: 6,
        Name: "name",
        ExpressionOf: [],
        HasExpression: [],
        OtherLinks: [],
        Authors: [],
        Interpreters: [],
        FormOfWorkText: "FormOfWorkText",
        FormOfWorkId: "FormOfWorkId",
        DateOfWork: "DateOfWork",
        OriginalPlaceOfWork: "OriginalPlaceOfWork",
        SubjectOfWork: "SubjectOfWork",
        TargetedCompleteness: "TargetedCompleteness",
        TargetedAudience: "TargetedAudience",
        HistoryOfWork: "HistoryOfWork",
        MediumOfPerformance: [],
        NumericDesignation: [],
        KeyText: "KeyText",
        KeyId: "KeyId",
        CoordinateSystem: "CoordinateSystem",
        Equinox: "Equinox",
        FormSubdivision: [],
        OtherFeatures: "OtherFeatures",
        Comment: "Comment",
        UrlThumbnail: "UrlThumbnail",
        Linked_authorities: [],

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

    // Handle the adding of an authority to inputs.Linked_authorities
    const addLinked_authorities = (author) => {
        setInputs(inputs => ({ ...inputs, Linked_authorities: [...inputs.Linked_authorities, author] }));
    }
    const addSee_Also = (category) => {
        setInputs(inputs => ({ ...inputs, See_also: [...inputs.See_also, category] }));
    }

    const setBroader_term = (authority) => {
        setInputs(inputs => (
            {
                ...inputs,
                Broader_term: {
                    id: authority.id.split('"')[1],
                    Label: authority.AuthorityName
                }
            }
        )
        )
    }
    const unsetBroader_term = () => {
        setInputs(inputs => (
            {
                ...inputs,
                Broader_term: {
                    id: "",
                    Label: ""
                }
            }
        )
        )
    }

    const setSee = (authority) => {
        setInputs(inputs => (
            {
                ...inputs,
                See: {
                    id: authority.id.split('"')[1],
                    Label: authority.AuthorityName
                }
            }
        )
        )
    }
    const unsetSee = () => {
        setInputs(inputs => (
            {
                ...inputs,
                See: {
                    id: "",
                    Label: ""
                }
            }
        )
        )
    }
    // Handle state change of the authority links
    const OnAuthorityLinkChange = (index, authorityLink) => {

        const Linked_authoritiesMutated = [...inputs.Linked_authorities]
        Linked_authoritiesMutated[index] = authorityLink
        setInputs(inputs => ({ ...inputs, Linked_authorities: Linked_authoritiesMutated }));
    }
    // a state containing which callback will be used when an authority is selected in the modal
    const [HandleChosenAuthority, setHandleChosenAuthority] = useState(() => addLinked_authorities)

    // a state containing which authity type is seleced in the modal
    const [ModalAuthorityType, setModalAuthorityType] = useState(0)

    // State of the modal
    const [open, setOpen] = React.useState(false);

    // if the modal is opened to add authority links
    const handleOpen = () => {
        setModalAuthorityType(0)
        setHandleChosenAuthority(() => addLinked_authorities)
        setOpen(true);
    };

    // if the modal is opened to set a broader term
    const handleOpenBroader_term = () => {
        setModalAuthorityType(20)
        setHandleChosenAuthority(() => setBroader_term)
        setOpen(true);
    };
    // if the modal is opened to set the See field
    const handleOpenSee = () => {
        setModalAuthorityType(20)
        setHandleChosenAuthority(() => setSee)
        setOpen(true);
    };

    const handleOpenSee_Also = () => {
        setModalAuthorityType(20)
        setHandleChosenAuthority(() => addSee_Also)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [insertCategory] = useMutation(INSERT_CATEGORY, {
        onCompleted: () => {
            Router.push("/admin/authorities/headings")

        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (e,
        Name,
        Scope_note,
        Comment,
        Broader_term,
        See,
        See_also,
        Authority_number,
        URL_thumbnail,
        Linked_authorities) => {
        e.preventDefault();

        const category = {
            Name,
            Scope_note,
            Comment,
            See_also: See_also.map((authority) => {
                return authority.id.split('"')[1]
            }),
            Authority_number,
            URL_thumbnail,
            Linked_authorities: Linked_authorities.map((authority) => {
                return {
                    Linked_Authority_Id: authority.id.split('"')[1],
                    Linked_Authority_Type: authority.Authority_Type,
                    Start: authority.Start,
                    End: authority.End,
                    Comment: authority.Comment,
                    LinkType: authority.LinkType,
                }
            }),
        }


        if (Broader_term !== "") {
            category.Broader_term = Broader_term
        }
        if (See !== "") {
            category.See = See
        }


        insertCategory({
            variables: category
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
        handleOpenSee,
        handleOpenBroader_term,
        handleOpenSee_Also,
        unsetBroader_term,
        unsetSee,
        open,
        onAddHandler,
        setInputValue,
        HandlePropertyChange,
        DeleteAtIndex,
        AddString
    };
}

export default useCategoryForm 