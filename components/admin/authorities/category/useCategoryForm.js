import React ,{ useState } from "react";

const useCategoryForm = (callback) => {


    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        Name: "",
        Scope_note: "",
        Comment: "",
        Broader_term: {
            id: "",
            Label: ""
        },
        See: {
            id: "",
            Label: ""
        },
        See_also: [],
        Authority_number: 0,
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
        open
    };
}

export default useCategoryForm 