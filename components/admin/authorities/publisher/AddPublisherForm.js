import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, IconButton } from '@material-ui/core';

import SimpleModal from '../shared/SearchAuthor'
import { Add, RemoveCircle } from '@material-ui/icons';
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';

import usePublisherForm from './usePublisherForm'; 
import TextBox from '../../../ui/TextBox';

const AddCategoryForm = ({ onAddHandler }) => {

    const {
        inputs,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        handleOpenSupplier,
        unsetSupplier,
        open } = usePublisherForm();

        const onSubmitForm = (event) => {
            event.preventDefault();
            onAddHandler(
                inputs.Name ,
                inputs.Address1 ,
                inputs.Address2 ,
                inputs.Post_code ,
                inputs.Country ,
                inputs.City ,
                inputs.Website , 
                inputs.note ,
                inputs.url_thumbnail ,
                inputs.Supplier.id ,
                inputs.Linked_authorities 
                )
        }

    return (
        <React.Fragment>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox required label="Name"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox required label="Address 1"
                        name="Address1"
                        value={inputs.Address1}
                        onChange={handleInputChange}

                    />
                </Grid>
                <Grid item xs={6}>
                    <TextBox required label="Address 2"
                        name="Address2"
                        value={inputs.Address2}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <TextBox label="Supplier"
                        name="Supplier"
                        value={inputs.Supplier.Label}
                        onChange={handleInputChange}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2} style={{ display: "flex" }}>
                    <IconButton color="primary" component="span"
                        onClick={handleOpenSupplier}
                        style={{ margin: "auto" }}
                    >
                        <Add />
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={unsetSupplier} style={{ margin: "auto" }}>
                        <RemoveCircle />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextBox label="Country"
                        name="Country"
                        value={inputs.Country}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextBox label="City"
                        name="City"
                        value={inputs.City}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextBox label="Postal code"
                        name="Post_code"
                        value={inputs.Post_code}
                        onChange={handleInputChange}
                    />
                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="Website"
                        name="Website"
                        value={inputs.Website}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="note"
                        name="note"
                        value={inputs.note}
                        onChange={handleInputChange}
                        multiline
                        rows="4"
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="url_thumbnail"
                        name="url_thumbnail"
                        value={inputs.url_thumbnail}
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
                onClick={onSubmitForm}>Save</Button>

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority}
                AuthorityType={ModalAuthorityType === 0 ? undefined : ModalAuthorityType}
            />
        </React.Fragment>
    )
}
export default AddCategoryForm 