import React from 'react';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import RoundButton from '../../../ui/RoundButton/RoundButton';
import Button from '../../../ui/Button';

import SimpleModal from '../shared/SearchAuthor'
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';

import useClassNumberForm from './useClassNumberForm';
import TextBox from '../../../ui/TextBox';


const AddClassNumberForm = () => {

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
    } = useClassNumberForm();


    const onSubmitForm = (event) => {
        event.preventDefault();
        onAddHandler(
            inputs.Name,
            inputs.Subject_description,
            inputs.URL_thumbnail,
            inputs.Linked_authorities)
    }

    return (
        <React.Fragment>

            <Grid>
                <GridElement s={6}>
                    <TextBox
                        label="Name"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox
                        label="Subject description"
                        name="Subject_description"
                        value={inputs.Subject_description}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <TextBox
                        label="URL of thumbnail"
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
export default AddClassNumberForm