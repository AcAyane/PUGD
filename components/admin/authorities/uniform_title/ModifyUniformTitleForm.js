import React from 'react';
<<<<<<< HEAD
import Button from '../../../ui/Button';
import { UPDATE_UNIFORM_TITLE } from '../../../../graphql/mutations/admin/authorities/uniform_title.mutations';
import { GET_UNIFORM_TITLE } from '../../../../graphql/queries/admin/authorities/uniform_title.queries';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import RoundButton from '../../../ui/RoundButton/RoundButton';
import SimpleModal from '../shared/SearchAuthor'
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import useUniformTitleForm from './useUniformTitleForm';

import TextBox from '../../../ui/TextBox';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';


import SelectBox from '../../../ui/SelectBox';
import DatePicker from '../../../ui/DatePicker/DatePicker';
import MultipleTextinputs from '../shared/MultipleTextinputs';
const ModifyUniformTitleForm = () => {
=======
import Button from '@/components/ui/Button';
import { UPDATE_CATEGORY } from '@/graphql/mutations/admin/authorities/category.mutations';
import { GET_CATEGORY } from '@/graphql/queries/admin/authorities/category.queries';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import SimpleModal from '@/components/admin/authorities/shared/SearchAuthor'
import LinkedAuthorityListView from '@/components/admin/authorities/shared/LinkedAuthorityListView';
import useCategoryForm from './useCategoryForm';
import SeeAlsoComponent from './SeeAlsoComponent';
import TextBox from '@/components/ui/TextBox';
import { withApollo } from '@/shared/apollo';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

const ModifyCategoryForm = () => {
>>>>>>> develop

    const { inputs,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
<<<<<<< HEAD
        open,
        onAddHandler,
        setInputValue,
        HandlePropertyChange,
        DeleteAtIndex,
        AddString } = useUniformTitleForm();

    const onSubmit = (e) => {
        e.preventDefault();
        onAddHandler()
    }
=======
        handleOpenSee,
        handleOpenBroader_term,
        handleOpenSee_Also,
        unsetBroader_term,
        unsetSee,
        open,
        setInputValue, } = useCategoryForm();

>>>>>>> develop


    const Router = useRouter()



<<<<<<< HEAD
    const [updateUniformTitle] = useMutation(UPDATE_UNIFORM_TITLE, {
        onCompleted: () => {
            Router.push("/admin/authorities/uniform_title")
=======
    const [updateCategory] = useMutation(UPDATE_CATEGORY, {
        onCompleted: () => {
            Router.push("/admin/authorities/headings")
>>>>>>> develop
        },
        onError: (error) => {
            alert(error.message);
        }
    });
<<<<<<< HEAD
    // const [getUniformTitleAllFields, UniformTitleResponse] = useLazyQuery(GET_UNIFORM_TITLE);


    const UniformTitleQuery = useQuery(GET_UNIFORM_TITLE, {
=======
    // const [getCategoryAllFields, CategoryResponse] = useLazyQuery(GET_CATEGORY);


    const CategoryQuery = useQuery(GET_CATEGORY, {
>>>>>>> develop
        variables: {
            Id: Router.query.id
        },
        onError: (error) => {
            console.log(error.message);
        },
        onCompleted: (data) => {
            console.log(data);

<<<<<<< HEAD
            if (data && data.uniform_title && data.uniform_title.length > 0) {

                setInputValue(data.uniform_title[0])
=======
            if (data && data.category && data.category.length > 0) {

                setInputValue(data.category[0])
>>>>>>> develop
            }
        },
    });
    const onSubmitForm = (event) => {
        event.preventDefault();
        onUpdateHandler()
    }
    const onUpdateHandler = () => {

<<<<<<< HEAD
        const uniform_title = {
=======
        const category = {
>>>>>>> develop
            Id: Router.query.id,
            Name: inputs.Name,
            Scope_note: inputs.Scope_note,
            Comment: inputs.Comment,
            Authority_number: inputs.Authority_number,
            URL_thumbnail: inputs.URL_thumbnail,
            // Linked_authorities: inputs.Linked_authorities.map((authority) => {
            //     return {
            //         Linked_Authority_Id: authority.id.split('"')[1],
            //         Linked_Authority_Type: authority.Authority_Type,
            //         Start: authority.Start,
            //         End: authority.End,
            //         Comment: authority.Comment,
            //         LinkType: authority.LinkType,
            //     }
            // }) 
            See_also: inputs.See_also.map((authority) => {
                return authority.id
            }
            )
        }
        if (inputs.Broader_term.id !== "") {
<<<<<<< HEAD
            uniform_title.Broader_term = inputs.Broader_term.id
        }
        if (inputs.See.id !== "") {
            uniform_title.See = inputs.See.id
        }

        // console.log({ variables: uniform_title })

        updateUniformTitle({ variables: uniform_title })
=======
            category.Broader_term = inputs.Broader_term.id
        }
        if (inputs.See.id !== "") {
            category.See = inputs.See.id
        }

        // console.log({ variables: category })

        updateCategory({ variables: category })
>>>>>>> develop



    }


    return (
        <React.Fragment>
            <Grid>
                <GridElement s={6}>
<<<<<<< HEAD

                    <SelectBox
                        label="Type of work"
                        name="type"
                        value={inputs.type}
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
                        name="nature"
                        value={inputs.nature}
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
                        name="name"
                        value={inputs.name}
=======
                    <TextBox required label="Name"
                        name="Name"
                        value={inputs.Name}
>>>>>>> develop
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
<<<<<<< HEAD

            {/* **********  Expression Of *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Expression Of &nbsp;
                        <RoundButton icon="add" size="30"
                        // onClick={e => DeleteAtIndex("MediumOfPerformance", 1)}
                        />
                    </h5>

                    {
                        inputs.expression_of.map((UniformTitle, index) => {
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
                                        value={inputs.type_work}
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
            {/* ********** Has for expression *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Has for expression &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.has_expression.map((UniformTitle, index) => {
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
            {/* ********** Other links *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Other links  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.other_links.map((UniformTitle, index) => {
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
            {/* ********** Authors *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Authors  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.authors.map((UniformTitle, index) => {
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
            {/* ********** Interpreters *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Interpreters  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.interpreters.map((UniformTitle, index) => {
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
                        name="form_of_work_text"
                        value={inputs.form_of_work_text}
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
                    <RoundButton icon="add" size="30"
                    // onClick={handleOpenBroader_term}
                    />
                    <RoundButton icon="delete" size="30"
                    // onClick={unsetBroader_term} 
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <DatePicker
                        label="Date of the work"
                        value={inputs.date_of_work && inputs.date_of_work.toISOString().split("T")[0] || ""}
                        onChange={(e) => {
                            e.persist();
                            HandlePropertyChange("date_of_work", new Date(e.target.value))
                        }}
                    />

                </GridElement>
                <GridElement s={6}>
                    <TextBox label="Original place of the work"
                        name="original_place_of_work"
                        value={inputs.original_place_of_work}
=======
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Scope note"
                        name="Scope_note"
                        value={inputs.Scope_note}
                        onChange={handleInputChange}

                    />
                </GridElement>
                <GridElement s={6}>
                    <TextBox required label="Comment"
                        name="Comment"
                        value={inputs.Comment}
>>>>>>> develop
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
<<<<<<< HEAD

                <GridElement s={12}>
                    <TextBox label="Subject of the work"
                        name="subject_of_work"
                        value={inputs.subject_of_work}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={6}>

                    <SelectBox
                        label="Targeted Completeness"
                        name="targeted_completeness"
                        value={inputs.targeted_completeness}
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
                        name="targeted_audience"
                        value={inputs.targeted_audience}
                        onChange={handleInputChange}

                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="History of the work"
                        name="history_of_work"
                        value={inputs.history_of_work}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>
            {/* <Grid>

                <GridElement s={12}>
                    <TextBox label="Context of the work"
                        name="context_of_work"
                        value={inputs.context_of_work}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid> */}
            <MultipleTextinputs
                Title="Medium of performance (for music)"
                ItemsList={inputs.medium_of_performance}
                onElementChange={
                    (newValue) => HandlePropertyChange("medium_of_performance", newValue)
                }
            />
            <MultipleTextinputs
                Title="Numeric designation (for music)"
                ItemsList={inputs.numeric_designation}
                onElementChange={
                    (newValue) => HandlePropertyChange("numeric_designation", newValue)
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
=======
                <GridElement s={5}>
                    <TextBox label="Broader term"
                        name="Broader_term"
                        value={inputs.Broader_term.Label}
                        onChange={handleInputChange}

                    />
>>>>>>> develop
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenBroader_term} />
                    <RoundButton icon="delete" size="30" onClick={unsetBroader_term} />
                </GridElement>
<<<<<<< HEAD
            </Grid> */}


            <Grid>

                <GridElement s={12}>
                    <TextBox label="Key(Saisie libre)"
                        name="key_text"
                        value={inputs.key_text}
                        onChange={handleInputChange}
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
                    {/* 
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
                    } */}
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Coordinate system (cartographic work)"
                        name="coordinate_system"
                        value={inputs.coordinate_system}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Equinox (cartographic work)"
                        name="equinox"
                        value={inputs.equinox}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <MultipleTextinputs
                Title="Form subdivision"
                ItemsList={inputs.form_subdivision}
                onElementChange={
                    (newValue) => HandlePropertyChange("form_subdivision", newValue)
                } />

            <Grid>

                <GridElement s={12}>
                    <TextBox label="Other distinctive features"
                        name="other_features"
                        value={inputs.other_features}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Comment"
                        name="comment"
                        value={inputs.comment}
                        onChange={handleInputChange}
                        Multiline
=======
            </Grid>
            <Grid>
                <GridElement s={5}>
                    <TextBox label="See (preferred term)"
                        name="See"
                        value={inputs.See.Label}
                        onChange={handleInputChange}
                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenSee} style={{ margin: "auto" }} />
                    <RoundButton icon="delete" size="30" onClick={unsetSee} style={{ margin: "auto" }} />
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={12}>
                    <h5> See also &nbsp;
                        <RoundButton icon="add" size="30" onClick={handleOpenSee_Also} />
                    </h5>

                    <SeeAlsoComponent categorys={inputs.See_also} removeSeeAlso={handleOpen} />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox label="Authority number"
                        name="Authority_number"
                        value={inputs.Authority_number}
                        onChange={handleInputChange}
>>>>>>> develop
                    />
                </GridElement>
            </Grid>
            <Grid>
<<<<<<< HEAD

                <GridElement s={12}>
                    <TextBox label="URL of thumbnail"
                        name="url_thumbnail"
                        value={inputs.url_thumbnail}
                        onChange={handleInputChange}

=======
                <GridElement s={12}>
                    <TextBox label="URL of thumbnail"
                        name="URL_thumbnail"
                        value={inputs.URL_thumbnail}
                        onChange={handleInputChange}
>>>>>>> develop
                    />
                </GridElement>
            </Grid>

            <h5> Linked Auhorities
            &nbsp;
                <RoundButton icon="add" size="30" onClick={handleOpen} />
            </h5>

            <LinkedAuthorityListView
<<<<<<< HEAD
                Linked_authorities={inputs.linked_authorities}
=======
                Linked_authorities={inputs.Linked_authorities}
>>>>>>> develop
                OnAuthorityLinkChange={OnAuthorityLinkChange} />
            <br />

            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
<<<<<<< HEAD
                onClick={onSubmit}>Save</Button>
=======
                onClick={onSubmitForm}>Save</Button>
>>>>>>> develop

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority}
                AuthorityType={ModalAuthorityType === 0 ? undefined : ModalAuthorityType}
            />
<<<<<<< HEAD
        </React.Fragment >
    )
}
export default ModifyUniformTitleForm
=======
        </React.Fragment>
    )
}
export default ModifyCategoryForm
>>>>>>> develop
