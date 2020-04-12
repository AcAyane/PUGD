import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton } from '@material-ui/core';

import SimpleModal from '../shared/SearchAuthor'
import { Add } from '@material-ui/icons';
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';

import useClassNumberForm from './useClassNumberForm';
import TextBox from '../../../ui/TextBox';

const AddClassNumberForm = ({ onAddHandler }) => {

    const {
        inputs, 
        handleInputChange, 
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        open
         } = useClassNumberForm();

    return (
        <React.Fragment>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox  required label="Name"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox  required label="Subject description"
                        name="Subject_description"
                        value={inputs.Subject_description}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="URL of thumbnail"
                        name="URL_thumbnail"
                        value={inputs.URL_thumbnail}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <h5> Linked Auhorities
                <IconButton color="primary" component="span" onClick={handleOpen}>
                    <Add />
                </IconButton>
            </h5>
            <LinkedAuthorityListView
                Linked_authorities={inputs.Linked_authorities}
                OnAuthorityLinkChange={OnAuthorityLinkChange} />



            <br />

            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
                onClick={(e) => onAddHandler(e,
                    inputs.Name,
                    inputs.Subject_description,
                    inputs.URL_thumbnail,
                    inputs.Linked_authorities)}>Save</Button>

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority}
                AuthorityType={ModalAuthorityType === 0 ? undefined : ModalAuthorityType}
            />
        </React.Fragment>
    )
}
export default AddClassNumberForm 