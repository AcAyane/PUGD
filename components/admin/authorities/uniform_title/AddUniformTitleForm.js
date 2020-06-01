import React from 'react';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import RoundButton from '../../../ui/RoundButton/RoundButton';
import Button from '../../../ui/Button';
import SimpleModal from '../shared/SearchAuthor'
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import useUniformTitleForm from './useUniformTitleForm';
import TextBox from '../../../ui/TextBox';
import { withApollo } from '../../../../shared/apollo';
import SelectBox from '../../../ui/SelectBox';
import DatePicker from '../../../ui/DatePicker/DatePicker';
import MultipleTextinputs from '../shared/MultipleTextinputs';

const AddUniformTitleForm = () => {

    const { inputs,
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
        unsetSee,
        open,
        onAddHandler,
        HandlePropertyChange,
        DeleteAtIndex,
        AddString } = useUniformTitleForm();

    return (
        <React.Fragment>

            <Grid>
                <GridElement s={6}>

                    <SelectBox
                        label="Type of work"
                        name="Type_Work"
                        value={inputs.Type_Work}
                        onChange={handleInputChange}>
                        <option value={10}>Musicale</option>
                        <option value={20}>Littéraire</option>
                        <option value={30}>Cinématographique</option>
                        <option value={40}>Autre</option>
                    </SelectBox>
                </GridElement>

                <GridElement s={6}>

                    <SelectBox
                        label="Nature of work"
                        name="Nature_Work"
                        value={inputs.Nature_Work}
                        onChange={handleInputChange}>
                        <option value={10}>Oeuvre</option>
                        <option value={20}>Expresssion</option>
                        <option value={30}>Exécution</option>
                    </SelectBox>
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Name of uniform title"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={12}>
                    <h5> Expression Of &nbsp;
                        <RoundButton icon="add" size="30"
                        // onClick={e => DeleteAtIndex("MediumOfPerformance", 1)}
                        />
                    </h5>

                    {
                        inputs.ExpressionOf.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>est un abrégé</option>
                                        <option value={20}>est un arrangement</option>
                                        <option value={30}>est une révision de</option>
                                        <option value={40}>est une traduction de</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <h5> Has for expression &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.HasExpression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <h5> Other links  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.HasExpression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <h5> Authors  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.HasExpression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <h5> Interpreters  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.HasExpression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Form of work(Free hand)"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
                <GridElement s={4}>
                    <TextBox label="Form of work"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"

                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenBroader_term} />
                    <RoundButton icon="delete" size="30" onClick={unsetBroader_term} />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <DatePicker
                        label="Date of the work"
                    // value={Authority.Start && Authority.Start.toISOString().split("T")[0] || ""}
                    // onChange={(e) => {
                    //     e.persist();
                    //     OnAuthorityLinkChange(index, { "Start": new Date(e.target.value) })
                    // }}
                    />

                </GridElement>
                <GridElement s={6}>
                    <TextBox label="Original place of the work"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"

                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Original place of the work"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"
                        Multiline
                    />
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={6}>

                    <SelectBox
                        label="Type of work"
                        name="Type_Work"
                        value={inputs.Type_Work}
                        onChange={handleInputChange}>
                        <option value={0}>--------</option>
                        <option value={20}>Finished work</option>
                        <option value={30}>Infinit work</option>
                    </SelectBox>
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Target audience"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"

                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="History of the work"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Context of the work"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"
                        Multiline
                    />
                </GridElement>
            </Grid>
            <MultipleTextinputs
                Title="Medium of performance (for music)"
                ItemsList={inputs.MediumOfPerformance}
                onElementChange={
                    (newValue) => HandlePropertyChange("MediumOfPerformance", newValue)
                }
            />
            <MultipleTextinputs
                Title="Numeric designation (for music)"
                ItemsList={inputs.NumericDesignation}
                onElementChange={
                    (newValue) => HandlePropertyChange("NumericDesignation", newValue)
                }
            />
            {/* 
            <Grid>
                <h6> Form of Work  &nbsp;
                        <RoundButton icon="add" size="30"

                    />
                </h6>
                <GridElement s={6}>
                    <TextBox required
                        label="Form of work(Free hand)"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenBroader_term} />
                    <RoundButton icon="delete" size="30" onClick={unsetBroader_term} />
                </GridElement>
            </Grid> */}


            <Grid>

                <GridElement s={12}>
                    <TextBox label="Key(Saisie libre)"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <h5> Key  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.HasExpression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Coordinate system (cartographic work)"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Equinox (cartographic work)"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <MultipleTextinputs
                Title="Form subdivision"
                ItemsList={inputs.FormSubdivision}
                onElementChange={
                    (newValue) => HandlePropertyChange("FormSubdivision", newValue)
                } />

            <Grid>

                <GridElement s={12}>
                    <TextBox label="Other distinctive features"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Comment"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="URL of thumbnail"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"

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
        </React.Fragment >
    )
}
export default withApollo({ ssr: true })(AddUniformTitleForm)