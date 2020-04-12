import React ,{ useState } from "react";

const useAuthorForm = (author) => {


    const [inputs, setInputs] = useState(author || {
        Author_Type: 10,
        Name_Auth: "",
        IndexName_Auth: "",
        Year_Auth: "",
        City_Auth: "",
        Country_Auth: "",
        WebSite_Auth: "",
        ISNI_Auth: "",
        UrlThumbnail_Auth: "",
        Note_Auth: "",
        Subdivision_Auth: "",
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

    // State of the modal
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setHandleChosenAuthority(() => addLinked_authorities)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [HandleChosenAuthority, setHandleChosenAuthority] = useState(() => addLinked_authorities)


    return {
        inputs, 
        handleInputChange, 
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        open
    };
}

export default useAuthorForm 