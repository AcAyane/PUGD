import React, { useState } from "react";
<<<<<<< HEAD
import { INSERT_CLASS_NUMBER } from '../../../../graphql/mutations/admin/authorities/class_number.mutations';
=======
import { INSERT_CLASS_NUMBER } from '@/graphql/mutations/admin/authorities/class_number.mutations';
>>>>>>> develop
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
const useCollectionTitleForm = (callback) => {

    const [insertClassNumber] = useMutation(INSERT_CLASS_NUMBER, {
        onCompleted: () => {
            Router.push("/admin/authorities/class_number")

        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (
        Name,
        Subject_description,
        Url_thumbnail,
        Linked_authorities) => {
        console.log({
            Name,
            Subject_description,
            Url_thumbnail,
            Linked_authorities
        });

        const class_number = {
            Name,
            Subject_description,
            Url_thumbnail,
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
        insertClassNumber({
            variables: class_number
        });
    }
    const setInputValue = (newInputs) => {
        setInputs({
            Title: newInputs.title,

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
    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        Title: "",
        URL_thumbnail: "",
        Linked_authorities: [],
    })

    // Handle the state changes of the inputs using the name property
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    // Handle the adding of an authority to inputs.Linked_authorities
    const addLinked_authorities = (author) => {
        setInputs(inputs => ({ ...inputs, Linked_authorities: [...inputs.Linked_authorities, author] }));
    }

    // Handle state change of the authority links
    const OnAuthorityLinkChange = (index, authorityLink) => {

        const Linked_authoritiesMutated = [...inputs.Linked_authorities]
        Linked_authoritiesMutated[index] = authorityLink
        setInputs(inputs => ({ ...inputs, Linked_authorities: Linked_authoritiesMutated }));
    }
    // a state containing which callback will be used when an authority is selected in the modal
    const [HandleChosenAuthority, setHandleChosenAuthority] = useState(() => addLinked_authorities)

    // a state containing which authity type is selected in the modal
    const [ModalAuthorityType, setModalAuthorityType] = useState(0)

    // State of the modal
    const [open, setOpen] = React.useState(false);

    // if the modal is opened to add authority links
    const handleOpen = () => {
        setModalAuthorityType(0)
        setHandleChosenAuthority(() => addLinked_authorities)
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
        open,
        onAddHandler,
        setInputValue
    };
}

export default useCollectionTitleForm 