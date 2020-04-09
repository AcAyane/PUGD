import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton } from '@material-ui/core';

import SimpleModal from '../shared/SearchAuthor'
import { Add, RemoveCircle } from '@material-ui/icons';
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';

import useCategoryForm from './useCategoryForm';
import SeeAlsoComponent from './SeeAlsoComponent';
import TextBox from '../../../ui/TextBox';

const AddCategoryForm = ({ onAddHandler }) => {

    const { inputs,
        open,
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
        unsetSee, } = useCategoryForm();

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
                    <TextBox required 
                    label="Scope note"
                        name="Scope_note"
                        value={inputs.Scope_note}
                        onChange={handleInputChange}

                    />
                </Grid>
                <Grid item xs={6}>
                    <TextBox required label="Comment"
                        name="Comment"
                        value={inputs.Comment}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <TextBox label="Broader term"
                        name="Broader_term"
                        value={inputs.Broader_term.Label}
                        onChange={handleInputChange}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2} style={{ display: "flex" }}>
                    <IconButton color="primary" component="span"
                        onClick={handleOpenBroader_term}
                        style={{ margin: "auto" }}
                    >
                        <Add />
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={unsetBroader_term} style={{ margin: "auto" }}>
                        <RemoveCircle />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <TextBox label="See (preferred term)"
                        name="See"
                        value={inputs.See.Label}
                        onChange={handleInputChange}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2} style={{ display: "flex" }}>
                    <IconButton color="primary" component="span"
                        onClick={handleOpenSee}
                        style={{ margin: "auto" }}
                    >
                        <Add />
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={unsetSee} style={{ margin: "auto" }}>
                        <RemoveCircle />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>








                    <h5> See also
                    <IconButton color="primary" component="span" onClick={handleOpenSee_Also}>
                            <Add />
                        </IconButton>
                    </h5>

                    <SeeAlsoComponent categorys={inputs.See_also} removeSeeAlso={handleOpen} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="Authority number"
                        name="Authority_number"
                        value={inputs.Authority_number}
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
                    inputs.Scope_note,
                    inputs.Comment,
                    inputs.Broader_term.id,
                    inputs.See.id,
                    inputs.See_also,
                    inputs.Authority_number,
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
export default AddCategoryForm 