import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Divider } from '@material-ui/core';

import SimpleModal from '../SearchAuthor'
import Add from '@material-ui/icons/Add';
import LinkedAuthorityView from '../LinkedAuthorityView';



const AddCategoryForm = ({ onAddHandler }) => {

    const [Name, setName] = useState('')
    const [Scope_note, setScope_note] = useState('')
    const [Comment, setComment] = useState('')
    const [Broader_term, setBroader_term] = useState('')
    const [See, setSee] = useState('')
    const [See_also, setSee_also] = useState([])
    const [Authority_number, setAuthority_number] = useState('')
    const [URL_thumbnail, setURL_thumbnail] = useState('')

    const [Linked_authorities, setLinked_authorities] = useState([])

    const addLinked_authorities = (author) => {
        setLinked_authorities([...Linked_authorities, author])

    }

    const [open, setOpen] = React.useState(false);
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
                    <TextField fullWidth required label="Name"
                        value={Name}
                        onChange={e => { setName(e.target.value) }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth required label="Scope note"
                        value={Scope_note}
                        onChange={e => { setScope_note(e.target.value) }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth required label="Comment"
                        value={Comment}
                        onChange={e => { setComment(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Broader term"
                        value={Broader_term}
                        onChange={e => { setBroader_term(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="See (preferred term)"
                        value={See}
                        onChange={e => { setSee(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="See also (related term)"
                        value={See_also}
                        onChange={e => { setSee_also(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Authority number"
                        value={Authority_number}
                        onChange={e => { setAuthority_number(e.target.value) }} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="URL of thumbnail"
                        value={URL_thumbnail}
                        onChange={e => { setURL_thumbnail(e.target.value) }} />
                </Grid>
            </Grid>

            <br /><br />

            <h5> Linked Auhorities
                    <Button variant="outlined" onClick={handleOpen}>
                    <Add />
                </Button>
            </h5>
            <Divider variant="middle" />
            {
                Linked_authorities.map((authority => {
                    return <LinkedAuthorityView
                        key={authority.id}
                        AuthorityName={authority.label}
                        Authority_Type={authority.Authority_Type} />
                }))
            }

            <br />

            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
                onClick={(e) => onAddHandler(e,
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
                    Linked_authorities)}>Save</Button>
            <Button variant="contained" onClick={handleOpen}>Save and continue</Button>

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={addLinked_authorities} />
        </React.Fragment>
    )
}
export default AddCategoryForm