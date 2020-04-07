import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import { IconButton } from '@material-ui/core';
import SearchAuthority from "../shared/SearchAuthor"
import Add from '@material-ui/icons/Add';

const AddAuthorForm = ({ onAddHandler }) => {

    const [inputs, setInputs] = useState({
        Author_Type: 20,
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

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel >Type Auteur</InputLabel>
                        <Select
                            name="Author_Type"
                            value={inputs.Author_Type}
                            onChange={handleInputChange}
                        >
                            <MenuItem value={10}>Personne Physique</MenuItem>
                            <MenuItem value={20}>Collectivité</MenuItem>
                            <MenuItem value={30}>Congrés</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth required label="Indexable name (or last name)"
                        name="IndexName_Auth"
                        value={inputs.IndexName_Auth}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth required label="Non indexable name (or first name)"
                        name="Name_Auth"
                        value={inputs.Name_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Year of birth-year of death"
                        name="Year_Auth"
                        value={inputs.Year_Auth}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Website"
                        name="WebSite_Auth"
                        value={inputs.WebSite_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="City"
                        name="City_Auth"
                        value={inputs.City_Auth}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Country"
                        name="Country_Auth"
                        value={inputs.Country_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Note"
                        name="Note_Auth"
                        value={inputs.Note_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="ISNI"
                        name="ISNI_Auth"
                        value={inputs.ISNI_Auth}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Subdivision"
                        name="Subdivision_Auth"
                        value={inputs.Subdivision_Auth}
                        onChange={handleInputChange} />

                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="URL of thumbnail"
                        name="UrlThumbnail_Auth"
                        value={inputs.UrlThumbnail_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>

            <h5> Linked Auhorities
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOpen}>
                    <Add />
                </IconButton>
            </h5>
            <LinkedAuthorityListView
                Linked_authorities={inputs.Linked_authorities}
                OnAuthorityLinkChange={OnAuthorityLinkChange} />

            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
                onClick={(e) => onAddHandler(e,
                    inputs.Author_Type,
                    inputs.Name_Auth,
                    inputs.IndexName_Auth,
                    inputs.Year_Auth,
                    inputs.City_Auth,
                    inputs.Country_Auth,
                    inputs.WebSite_Auth,
                    inputs.ISNI_Auth,
                    inputs.UrlThumbnail_Auth,
                    inputs.Note_Auth,
                    inputs.Subdivision_Auth,
                    inputs.Linked_authorities)}
            >Save</Button>


            <SearchAuthority
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority} />
        </React.Fragment>
    )
}
export default AddAuthorForm