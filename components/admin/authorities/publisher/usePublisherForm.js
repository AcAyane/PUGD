import React, { useState } from "react";
import Router from 'next/router';
import { INSERT_PUBLISHER } from '../../../../graphql/mutations/admin/authorities/publisher.mutations';
import { useMutation } from '@apollo/react-hooks';
const useCategoryForm = (callback) => {


    const [insertPublisher] = useMutation(INSERT_PUBLISHER, {
        onCompleted: () => {
            Router.push("/admin/authorities/publisher")

        },
        onError: (error) => {
            alert(error.message);
        }
    });


    const onAddHandler = (
        Name,
        Address1,
        Address2,
        Post_code,
        Country,
        City,
        Website,
        note,
        url_thumbnail,
        Supplier,
        Linked_authorities) => {


        const publisher = {
            Name,
            Address1,
            Address2,
            Post_code,
            Country,
            City,
            Website,
            note,
            url_thumbnail,
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


        if (Supplier !== "") {
            publisher.Supplier = Supplier
        }


        console.log(publisher);

        insertPublisher({
            variables: publisher
        });
    }

    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        Name: "",
        Address1: "",
        Address2: "",
        Post_code: "",
        Country: "",
        City: "",
        Website: "",
        note: "",
        url_thumbnail: "",
        Supplier: {
            id: "",
            Label: ""
        },
        Linked_authorities: [],
    })

    const setInputValue = (newInputs) => {


        setInputs({
            Name: newInputs.name,
            Address1: newInputs.address1,
            Address2: newInputs.address2,
            Post_code: newInputs.post_code,
            Country: newInputs.country,
            City: newInputs.city,
            Website: newInputs.website,
            note: newInputs.note,
            url_thumbnail: newInputs.url_thumbnail,

            Supplier: {
                id: newInputs.supplier._id && newInputs.supplier._id.split('"')[1] || "",
                Label: newInputs.supplier.name || ""
            }, 
            Linked_authorities:[]
            // Linked_authorities: newInputs.linked_authorities.map((linked_authority) => {

            //     return {
            //         AuthorityName: "something",
            //         Authority_Type: Number(linked_authority.linked_authority_type),
            //         Comment: linked_authority.comment,
            //         End: linked_authority.end && linked_authority.end > 0 && new Date(Number(linked_authority.end)),
            //         Start: linked_authority.start && linked_authority.start > 0 && new Date(Number(linked_authority.start)),
            //         id: linked_authority._id,
            //     }
            // }),
        });
    }

    // Handle the state changes of the inputs using the name property
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    // Handle the adding of an authority to inputs.Linked_authorities
    const addLinked_authorities = (author) => {
        setInputs(inputs => ({ ...inputs, Linked_authorities: [...inputs.Linked_authorities, author] }));
    }

    const setSupplier = (authority) => {
        setInputs(inputs => (
            {
                ...inputs,
                Supplier: {
                    id: authority.id.split('"')[1],
                    Label: authority.AuthorityName
                }
            }
        )
        )
    }
    const unsetSupplier = () => {
        setInputs(inputs => (
            {
                ...inputs,
                Supplier: {
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

    // if the modal is opened to set a Supplier
    const handleOpenSupplier = () => {
        setModalAuthorityType(30)
        setHandleChosenAuthority(() => setSupplier)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return {
        inputs,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        handleOpenSupplier,
        unsetSupplier,
        open,
        onAddHandler,
        setInputValue
    };
}

export default useCategoryForm 