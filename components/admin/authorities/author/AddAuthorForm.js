import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Divider } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SimpleModal from '../../../../components/admin/authorities/SearchAuthor'
import Add from '@material-ui/icons/Add';
import LinkedAuthorityView from '../../../../components/admin/authorities/LinkedAuthorityView';
import { Card, CardContent } from '@material-ui/core';



const AddAuthorForm = ({ onSearchHandler }) => {

    const [Author_Type, setAuthor_Type] = useState(10)
    const [Name_Auth, setName_Auth] = useState('')
    const [IndexName_Auth, setIndexName_Auth] = useState('')
    const [Year_Auth, setYear_Auth] = useState('')
    const [City_Auth, setCity_Auth] = useState('')
    const [Country_Auth, setCountry_AuthAuteur] = useState('')
    const [WebSite_Auth, setWebSite_Auth] = useState('')
    const [ISNI_Auth, setISNI_Auth] = useState('')
    const [UrlThumbnail_Auth, setUrlThumbnail_Auth] = useState('')
    const [Note_Auth, setNote_Auth] = useState('')

    const [Subdivision_Auth, setSubdivision_Auth] = useState('')
    const [Linked_authorities, setLinked_authorities] = useState([])

    const addLinked_authorities = (author) => {
        setLinked_authorities([...Linked_authorities, author])
    }
    const OnAuthorityLinkChange = (index,authorityLink) => {
        const Linked_authoritiesMutated = [...Linked_authorities]
        Linked_authoritiesMutated[index]=authorityLink
        setLinked_authorities(Linked_authoritiesMutated)
    }
    
    const [open, setOpen] = React.useState(false);

    // Handling the opening and closing of the modal
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel >Type Auteur</InputLabel>
                        <Select
                            value={Author_Type}
                            onChange={e => { setAuthor_Type(e.target.value) }}
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
                        value={IndexName_Auth}
                        onChange={e => { setIndexName_Auth(e.target.value) }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth required label="Non indexable name (or first name)"
                        value={Name_Auth}
                        onChange={e => { setName_Auth(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Year of birth-year of death"
                        value={Year_Auth}
                        onChange={e => { setYear_Auth(e.target.value) }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Website"
                        value={WebSite_Auth}
                        onChange={e => { setWebSite_Auth(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="City"
                        value={City_Auth}
                        onChange={e => { setCity_Auth(e.target.value) }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Country"
                        value={Country_Auth}
                        onChange={e => { setCountry_AuthAuteur(e.target.value) }} />
                </Grid>
            </Grid>
            {/* <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Pseudonym (pen name)"
                                value={ISNI_Auth}
                                onChange={e => { setISNI_Auth(e.target.value) }} />
                        </Grid>
                    </Grid> */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Note"
                        value={Note_Auth}
                        onChange={e => { setNote_Auth(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="ISNI"
                        value={ISNI_Auth}
                        onChange={e => { setISNI_Auth(e.target.value) }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Subdivision"
                        value={Subdivision_Auth}
                        onChange={e => { setSubdivision_Auth(e.target.value) }} />

                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="URL of thumbnail"
                        value={UrlThumbnail_Auth}
                        onChange={e => { setUrlThumbnail_Auth(e.target.value) }} />
                </Grid>
            </Grid>
            
            <Card  >
                <CardContent>
                    <h5> Linked Auhorities
                    <Button variant="outlined" onClick={handleOpen}>
                            <Add />
                        </Button>
                    </h5>
                    <Divider variant="middle" />
                    {
                        Linked_authorities.map(((authority,index) => {
                            return <LinkedAuthorityView
                                key={index}
                                Authority={authority}
                                OnAuthorityLinkChange = {OnAuthorityLinkChange}
                                index={index}
                                // AuthorityName={authority.label}
                                // Authority_Type={authority.Authority_Type} 
                                />
                        }))
                    }
                </CardContent>
            </Card>


            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
                    onClick={(e) => onSearchHandler(e,
                        Author_Type,
                        Name_Auth,
                        IndexName_Auth,
                        Year_Auth,
                        City_Auth,
                        Country_Auth,
                        WebSite_Auth,
                        ISNI_Auth,
                        UrlThumbnail_Auth,
                        Note_Auth,
                        Subdivision_Auth,
                        Linked_authorities)}
            >Save</Button>
            {/* <Button variant="contained" onClick={handleOpen}>Save and continue</Button> */}

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={addLinked_authorities} />
        </React.Fragment>
    )
}
export default AddAuthorForm