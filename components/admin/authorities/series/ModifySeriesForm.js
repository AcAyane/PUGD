import React from 'react';
import Button from '@/components/ui/Button';
import { UPDATE_SERIES } from '@/graphql/mutations/admin/authorities/series.mutations';
import { GET_SERIES } from '@/graphql/queries/admin/authorities/series.queries';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import SimpleModal from '@/shared/SearchAuthor'
import LinkedAuthorityListView from '@/shared/LinkedAuthorityListView';
import useSeriesForm from './useSeriesForm';
import TextBox from '@/components/ui/TextBox';
import { withApollo } from '@/shared/apollo';
import { useMutation, useQuery, } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

const ModifySeriesForm = () => {

    const { inputs,
        open,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        handleOpenPublisher,
        unsetPublisher,
        setInputValue, } = useSeriesForm();



    const Router = useRouter()



    const [updateSeries] = useMutation(UPDATE_SERIES, {
        onCompleted: () => {
            Router.push("/admin/authorities/series")
        },
        onError: (error) => {
            alert(error.message);
        }
    });
    // const [getSeriesAllFields, SeriesResponse] = useLazyQuery(GET_SERIES);


    const SeriesQuery = useQuery(GET_SERIES, {
        variables: {
            Id: Router.query.id
        },
        onError: (error) => {
            console.log(error.message);
        },
        onCompleted: (data) => {
            console.log(data);

            if (data && data.series && data.series.length > 0) {

                setInputValue(data.series[0])
            }
        },
    });
    const onSubmitForm = (event) => {
        event.preventDefault();
        onUpdateHandler()
    }
    const onUpdateHandler = () => {

        const series = {
            Id: Router.query.id,
            Title: inputs.Title,
            Issn: inputs.Issn,
            Website: inputs.Website,
            Comment: inputs.Comment,
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
        }
        if (inputs.Publisher.id !== "") {
            series.Publisher = inputs.Publisher.id
        }

        // console.log(inputs)

        updateSeries({ variables: series })




    }


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
                <GridElement s={6}>
                    <TextBox required label="ISSN"
                        name="Issn"
                        value={inputs.Issn}
                        onChange={handleInputChange}
                    />
                </GridElement>

            </Grid>
            <Grid>
                <GridElement s={5}>
                    <TextBox label="Publisher"
                        name="Publisher"
                        value={inputs.Publisher && inputs.Publisher.Label || ""}
                        onChange={handleInputChange}

                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenPublisher} />
                    <RoundButton icon="delete" size="30" onClick={unsetPublisher} />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox label="Website"
                        name="Website"
                        value={inputs.Website}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox label="Comment"
                        name="Comment"
                        value={inputs.Comment}
                        onChange={handleInputChange}
                        Multiline
                        rows="4"
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

            <Button variant="contained">
                Cancel
        </Button>
            <Button variant="contained"
                onClick={onSubmitForm}>
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
export default ModifySeriesForm