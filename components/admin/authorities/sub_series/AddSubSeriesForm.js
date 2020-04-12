import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton } from '@material-ui/core';
import SimpleModal from '../shared/SearchAuthor'
import { Add, RemoveCircle } from '@material-ui/icons';
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import useSubSeriesForm from './useSubSeriesForm';
import TextBox from '../../../ui/TextBox';

const AddSubSeriesForm = ({ onAddHandler }) => {
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        onAddHandler(
            inputs.Name,
            inputs.Issn,
            inputs.Publisher.id,
            inputs.Parent_series.id,
            inputs.Website,
            inputs.Comment,
            inputs.URL_thumbnail,
            inputs.Linked_authorities)
    }
    const { 
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
        unsetParent_series,} = useSubSeriesForm();

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
                <Grid item xs={6}>
                    <TextBox required label="ISSN"
                        name="Issn"
                        value={inputs.Issn}
                        onChange={handleInputChange}
                    />
                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <TextBox label="Publisher"
                        name="Publisher"
                        value={inputs.Publisher.Label}
                        onChange={handleInputChange}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2} style={{ display: "flex" }}>
                    <IconButton color="primary" component="span"
                        onClick={handleOpenPublisher}
                        style={{ margin: "auto" }}
                    >
                        <Add />
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={unsetPublisher} style={{ margin: "auto" }}>
                        <RemoveCircle />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <TextBox label="Sub-series of"
                        name="Parent_series"
                        value={inputs.Parent_series.Label}
                        onChange={handleInputChange}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2} style={{ display: "flex" }}>
                    <IconButton color="primary" component="span"
                        onClick={handleOpenParent_series}
                        style={{ margin: "auto" }}
                    >
                        <Add />
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={unsetParent_series} style={{ margin: "auto" }}>
                        <RemoveCircle />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="Website"
                        name="Website"
                        value={inputs.Website}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="Comment"
                        name="Comment"
                        value={inputs.Comment}
                        onChange={handleInputChange}
                        multiline
                        rows="4"
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

            <Button variant="contained">
                Cancel
            </Button>
            <Button variant="contained"
                onClick={onSubmitHandler}>
                Save
            </Button>

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority}
                AuthorityType={ModalAuthorityType === 0 ? undefined : ModalAuthorityType}
            />
        </React.Fragment>
    )
}
export default AddSubSeriesForm 