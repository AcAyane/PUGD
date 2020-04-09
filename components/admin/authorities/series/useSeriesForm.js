import React, { useState } from "react";

const useSeriesForm = (callback) => {


    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        Title: "",
        Issn: "",
        Publisher: {
            id: "",
            Label: ""
        },
        Website: "",
        Comment: "",
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
    const addSee_Also = (category) => {
        setInputs(inputs => ({ ...inputs, See_also: [...inputs.See_also, category] }));
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

    const handleOpenPublisher = () => {
        setModalAuthorityType(30)
        setHandleChosenAuthority(() => setPublisher)
        setOpen(true);
    };
    const setPublisher = (authority) => {
        setInputs(inputs => (
            {
                ...inputs,
                Publisher: {
                    id: authority.id.split('"')[1],
                    Label: authority.AuthorityName
                }
            }
        )
        )
        setOpen(false);
    }

    const unsetPublisher = () => {
        setInputs(inputs => (
            {
                ...inputs,
                Publisher: {
                    id: "",
                    Label: ""
                }
            }
        )
        )
    }
    const handleClose = () => {
        setOpen(false);
    };


    return {
        inputs,
        open,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        handleOpenPublisher,
        unsetPublisher
    };
}

export default useSeriesForm 