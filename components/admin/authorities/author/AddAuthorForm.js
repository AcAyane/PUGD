import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button  from '@material-ui/core/Button'; 
import MenuItem from '@material-ui/core/MenuItem'; 

import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import IconButton from '@material-ui/core/IconButton';
import SearchAuthority from "../shared/SearchAuthor"
import Add from '@material-ui/icons/Add';
import useAuthorForm from './useAuthorForm';
import TextBox from '../../../ui/TextBox';
import SelectBox from '../../../ui/SelectBox';

const AddAuthorForm = ({ onAddHandler }) => {

    const {
        inputs,
        handleInputChange,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        open } = useAuthorForm();

    const onSubmitForm = (event) => {
        event.preventDefault();
        onAddHandler(
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
            inputs.Linked_authorities)
    }
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>

                    <SelectBox
                        label="Type Auteur"
                        name="Author_Type"
                        value={inputs.Author_Type}
                        onChange={handleInputChange}>
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={10}>Personne Physique</MenuItem>
                        <MenuItem value={20}>Collectivité</MenuItem>
                        <MenuItem value={30}>Congrés</MenuItem>
                    </SelectBox>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox
                        required
                        label="Indexable name (or last name)"
                        name="IndexName_Auth"
                        value={inputs.IndexName_Auth}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextBox required label="Non indexable name (or first name)"
                        name="Name_Auth"
                        value={inputs.Name_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="Year of birth-year of death"
                        name="Year_Auth"
                        value={inputs.Year_Auth}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextBox label="Website"
                        name="WebSite_Auth"
                        value={inputs.WebSite_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="City"
                        name="City_Auth"
                        value={inputs.City_Auth}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextBox label="Country"
                        name="Country_Auth"
                        value={inputs.Country_Auth}
                        onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="Note"
                        name="Note_Auth"
                        value={inputs.Note_Auth}
                        onChange={handleInputChange}
                        multiline
                        rows="4" />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="ISNI"
                        name="ISNI_Auth"
                        value={inputs.ISNI_Auth}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextBox label="Subdivision"
                        name="Subdivision_Auth"
                        value={inputs.Subdivision_Auth}
                        onChange={handleInputChange} />

                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="URL of thumbnail"
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
                onClick={onSubmitForm}
            >Save</Button>


            <SearchAuthority
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority} />
        </React.Fragment>
    )
}
export default AddAuthorForm