import React from 'react';
import Button from '../../../ui/Button';

import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import SearchAuthority from "../shared/SearchAuthor"
import useAuthorForm from './useAuthorForm';
import TextBox from '../../../ui/TextBox';
import SelectBox from '../../../ui/SelectBox';
import RoundButton from '../../../ui/RoundButton/RoundButton';
import { withApollo } from '../../../../shared/apollo';
import i18next from '../../../../components/admin/localisation/i18nextInit';
const AddAuthorForm = () => {
    const {
        inputs,
        onAddHandler,
        handleInputChange,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        open } = useAuthorForm();

    const onSubmitForm = (event) => {
        event.preventDefault();
        onAddHandler()
    }

   
    return (
        <React.Fragment>
            <div className="row">
                <div className="col s6">

                    <SelectBox
                        label={i18next.t("authorType")}
                        name="Author_Type"
                        value={inputs.Author_Type}
                        onChange={handleInputChange}>
                        <option value={10}>{i18next.t("person")}</option>
                        <option value={20}>{i18next.t("corp")}</option>
                        <option value={30}>{i18next.t("convention")}</option>
                    </SelectBox>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <TextBox
                        required
                        label={i18next.t("indexName")}
                        name="IndexName_Auth"
                        value={inputs.IndexName_Auth}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col s6">
                    <TextBox
                        required
                        label={i18next.t("nonindexName")}
                        name="Name_Auth"
                        value={inputs.Name_Auth}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <TextBox
                        label={i18next.t("birthYear")}
                        name="Year_Birth"
                        value={inputs.Year_Birth}
                        onChange={handleInputChange}
                        type="number" />
                </div>
                <div className="col s6">
                    <TextBox label={i18next.t("deathYear")}
                        type="number"
                        name="Year_Death"
                        value={inputs.Year_Death}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <TextBox
                        label={i18next.t("website")}
                        name="WebSite_Auth"
                        value={inputs.WebSite_Auth}
                        onChange={handleInputChange} />
                </div>
            </div>


            <div className="row">
                <div className="col s6">
                    <TextBox label={i18next.t("city")}
                        name="City_Auth"
                        value={inputs.City_Auth}
                        onChange={handleInputChange} />
                </div>
                <div className="col s6">
                    <TextBox label={i18next.t("country")}
                        name="Country_Auth"
                        value={inputs.Country_Auth}
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <TextBox label={i18next.t("note")}
                        name="Note_Auth"
                        value={inputs.Note_Auth}
                        onChange={handleInputChange}
                        Multiline />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <TextBox label="ISNI"
                        name="ISNI_Auth"
                        value={inputs.ISNI_Auth}
                        onChange={handleInputChange} />
                </div>
                <div className="col s6">
                    <TextBox label={i18next.t("subdivision")}
                        name="Subdivision_Auth"
                        value={inputs.Subdivision_Auth}
                        onChange={handleInputChange} />

                </div>

            </div>
            <div className="row">
                <div className="col s12">
                    <TextBox label={i18next.t("url_thumbnail")}
                        name="UrlThumbnail_Auth"
                        value={inputs.UrlThumbnail_Auth}
                        onChange={handleInputChange} />
                </div>
            </div>

            <h5> {i18next.t("linked_authority")}
            &nbsp;
                <RoundButton icon="add" size="30" onClick={handleOpen} />
            </h5>
            <LinkedAuthorityListView
                Linked_authorities={inputs.Linked_authorities}
                OnAuthorityLinkChange={OnAuthorityLinkChange} />

            <Button variant="contained">{i18next.t("cancel")}</Button>
            <Button variant="contained"
                onClick={onSubmitForm}
            >{i18next.t("save")}</Button>


            <SearchAuthority
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority} />
        </React.Fragment>
    )
}
export default withApollo({ ssr: true })(AddAuthorForm)