import React from 'react';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import Button from '@/components/ui/Button';


import SimpleModal from '@/components/admin/authorities/shared/SearchAuthor'
import LinkedAuthorityListView from '@/components/admin/authorities/shared/LinkedAuthorityListView';

import useCollectionTitleForm from './useCollectionTitleForm';
import TextBox from '@/components/ui/TextBox'; 

const AddCollectionTitleForm = () => {

    const {
        inputs,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        open,
        onAddHandler
    } = useCollectionTitleForm();

    return (
        <React.Fragment>

            <Grid>
                <GridElement s={6}>
                    <TextBox required label="Title"
                        name="Title"
                        value={inputs.Title}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <TextBox label="URL of thumbnail"
                        name="URL_thumbnail"
                        value={inputs.URL_thumbnail}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>

            <h5> Linked Auhorities
            &nbsp;
                <RoundButton icon="add" size="30" onClick={handleOpen} />
            </h5>
            <LinkedAuthorityListView
                Linked_authorities={inputs.Linked_authorities}
                OnAuthorityLinkChange={OnAuthorityLinkChange} />
            <br />

            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
                onClick={(e) => onAddHandler(e,
                    inputs.Title,
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
export default AddCollectionTitleForm