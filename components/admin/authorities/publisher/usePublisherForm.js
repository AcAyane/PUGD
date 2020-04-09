import React ,{ useState } from "react";

const useCategoryForm = (callback) => {


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
        open
    };
}

export default useCategoryForm 