import React from 'react';
import Button from '../../../ui/Button';
import { UPDATE_CATEGORY } from '@/graphql/mutations/admin/authorities/category.mutations';
import { GET_CATEGORY } from '@/graphql/queries/admin/authorities/category.queries';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import RoundButton from '../../../ui/RoundButton/RoundButton';
import SimpleModal from '../shared/SearchAuthor'
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import useCategoryForm from './useCategoryForm';
import SeeAlsoComponent from './SeeAlsoComponent';
import TextBox from '../../../ui/TextBox';
import { withApollo } from '../../../../shared/apollo';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

const ModifyCategoryForm = () => {

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
        setInputValue, } = useCategoryForm();



    const Router = useRouter()



    const [updateCategory] = useMutation(UPDATE_CATEGORY, {
        onCompleted: () => {
            Router.push("/admin/authorities/headings")
        },
        onError: (error) => {
            alert(error.message);
        }
    });
    // const [getCategoryAllFields, CategoryResponse] = useLazyQuery(GET_CATEGORY);


    const CategoryQuery = useQuery(GET_CATEGORY, {
        variables: {
            Id: Router.query.id
        },
        onError: (error) => {
            console.log(error.message);
        },
        onCompleted: (data) => {
            console.log(data);

            if (data && data.category && data.category.length > 0) {

                setInputValue(data.category[0])
            }
        },
    });
    const onSubmitForm = (event) => {
        event.preventDefault();
        onUpdateHandler()
    }
    const onUpdateHandler = () => {

        const category = {
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
            category.Broader_term = inputs.Broader_term.id
        }
        if (inputs.See.id !== "") {
            category.See = inputs.See.id
        }

        // console.log({ variables: category })

        updateCategory({ variables: category })



    }


    return (
        <React.Fragment>
            <Grid>
                <GridElement s={6}>
                    <TextBox required label="Name"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
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
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={5}>
                    <TextBox label="Broader term"
                        name="Broader_term"
                        value={inputs.Broader_term.Label}
                        onChange={handleInputChange}

                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenBroader_term} />
                    <RoundButton icon="delete" size="30" onClick={unsetBroader_term} />
                </GridElement>
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
export default withApollo({ ssr: true })(ModifyCategoryForm)