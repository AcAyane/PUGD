import React, { useState } from "react";
import { INSERT_SUB_SERIES } from '../../../../graphql/mutations/admin/authorities/sub_series.mutations';
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
const useSubSeriesForm = (callback) => {


    const [insertSubSeries] = useMutation(INSERT_SUB_SERIES, {
        onCompleted: () => {
            Router.push("/admin/authorities/sub_series")

        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (
        Name,
        Issn,
        Publisher,
        Parent_series,
        Website,
        Comment,
        Url_thumbnail,
        Linked_authorities) => {


        const sub_series = {
            Website,
            Comment,
            Url_thumbnail,
            Name,
            Issn,
            Parent_series,
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


        if (Publisher !== "") {
            sub_series.Publisher = Publisher
        }
        if (Parent_series !== "") {
            sub_series.Parent_series = Parent_series
        }

        insertSubSeries({
            variables: sub_series
        });
    }
    // Handle the state State of the inputs
    const [inputs, setInputs] = useState({
        Name: "",
        Issn: "",
        Publisher: {
            id: "",
            Label: ""
        },
        Parent_series: {
            id: "",
            Label: ""
        },
        Website: "",
        Comment: "",
        URL_thumbnail: "",
        Linked_authorities: [],
    })

    const setInputValue = (newInputs) => {


        setInputs({
            Name: newInputs.name,
            Issn: newInputs.issn,
            Publisher: {
                id: newInputs.publisher && newInputs.publisher._id.split('"')[1] || "",
                Label: newInputs.publisher && newInputs.publisher.name || ""
            },
            Parent_series: {
                id: newInputs.parent_series && newInputs.parent_series._id.split('"')[1] || "",
                Label: newInputs.parent_series && newInputs.parent_series.title || ""
            },
            Website: newInputs.website,
            Comment: newInputs.comment,
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
        console.log(newInputs);

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
    const handleOpenParent_series = () => {
        setModalAuthorityType(40)
        setHandleChosenAuthority(() => setParent_series)
        setOpen(true);
    };
    const setParent_series = (authority) => {
        setInputs(inputs => (
            {
                ...inputs,
                Parent_series: {
                    id: authority.id.split('"')[1],
                    Label: authority.AuthorityName
                }
            }
        )
        )
        setOpen(false);
    }

    const unsetParent_series = () => {
        setInputs(inputs => (
            {
                ...inputs,
                Parent_series: {
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
        unsetPublisher,
        handleOpenParent_series,
        unsetParent_series,
        onAddHandler,
        setInputValue
    };
}

export default useSubSeriesForm 