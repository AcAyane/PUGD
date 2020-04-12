import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Grid from '@material-ui/core/Grid';

import { Card, CardContent } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { useLazyQuery } from '@apollo/react-hooks';

import { GET_AUTHOR_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/author.queries';
import { GET_CATEGORY_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/category.queries';
import { GET_PUBLISHER_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/publisher.queries';
import { GET_SERIES_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/series.queries';

import SearchAuthorComponent from '../author/SearchAuthorComponent';
import SearchCategoryComponent from '../category/SearchCategoryComponent';
import SearchPublisherComponent from '../publisher/SearchPublisherComponent';
import SearchSeriesComponent from '../series/SearchSeriesComponent';

import ListAuthorComponent from '../author/ListAuthorComponent';
import ListCategoryComponent from '../category/ListCategoryComponent';
import ListPublisherComponent from '../publisher/ListPublisherComponent';
import ListSeriesComponent from '../series/ListSeriesComponent';



const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: "80%",
        left: '10%',
        height: "80%",
        top: '10%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        'overflow-y': "scroll"

    },
}));

const SearchAuthority = ({ addAuthor, open, handleClose, AuthorityType }) => {


    const [getAuthorAllFields, { error, data }] = useLazyQuery(GET_AUTHOR_ALL_FIELDS);

    const [getCategoryAllFields, CategoryResponse] = useLazyQuery(GET_CATEGORY_ALL_FIELDS);

    const [getPublisherAllFields, PublisherResponse] = useLazyQuery(GET_PUBLISHER_ALL_FIELDS);

    const [getSeriesAllFields, SeriesResponse] = useLazyQuery(GET_SERIES_ALL_FIELDS);

    const [Authority_Type, setAuthority_Type] = useState(AuthorityType || 10)

    useEffect(() => {
        if (AuthorityType !== undefined)
            setAuthority_Type(AuthorityType)
    }, [AuthorityType]);

    const AddAuthorityLink = ({ id, label }) => {
        addAuthor({
            id,
            AuthorityName: label,
            Authority_Type,
            Start: null,
            End: null,
            Comment: "",
        })
    }

    const classes = useStyles();



    const renderSwitch = () => {
        switch (Authority_Type) {
            case 10:
                return <React.Fragment>
                    <Card  >
                        <CardContent>
                            <SearchAuthorComponent
                                getAuthorAllFields={getAuthorAllFields}
                                SearchOnly />
                        </CardContent>
                    </Card>

                    <Card  >
                        <CardContent>
                            <h4 className="card-title">Recherche : Auteurs</h4>
                            {error ? <div color="danger">{String(error.message)}</div> : null}

                            {data &&
                                <ListAuthorComponent authors={data.author_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </CardContent>
                    </Card>
                </React.Fragment>
            case 20:
                return <React.Fragment>
                    <Card  >
                        <CardContent>
                            <SearchCategoryComponent getCategoryAllFields={getCategoryAllFields} SearchOnly />
                        </CardContent>
                    </Card>

                    <Card  >
                        <CardContent>
                            <h4 className="card-title">Recherche : Categories</h4>
                            {error ? <div color="danger">{String(error.message)}</div> : null}

                            {CategoryResponse.data &&
                                <ListCategoryComponent categories={CategoryResponse.data.category_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </CardContent>
                    </Card>
                </React.Fragment>
            case 30:
                return <React.Fragment>
                    <Card  >
                        <CardContent>
                            <SearchPublisherComponent getPublisherAllFields={getPublisherAllFields} SearchOnly />
                        </CardContent>
                    </Card>

                    <Card  >
                        <CardContent>
                            <h4 className="card-title">Recherche : Publishers</h4>
                            {error ? <div color="danger">{String(PublisherResponse.error.message)}</div> : null}

                            {PublisherResponse.data &&
                                <ListPublisherComponent publishers={PublisherResponse.data.publisher_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </CardContent>
                    </Card>
                </React.Fragment>
            case 40:
                return <React.Fragment>
                    <Card  >
                        <CardContent>
                            <SearchSeriesComponent getSeriesAllFields={getSeriesAllFields} SearchOnly/>
                        </CardContent>
                    </Card>

                    <Card  >
                        <CardContent>
                            <h4 className="card-title">Recherche : Series</h4>
                            {SeriesResponse.error ? <div color="danger">{String(SeriesResponse.error.message)}</div> : null}
                            {SeriesResponse.data &&
                                <ListSeriesComponent series={SeriesResponse.data.series_all_fields} AddAuthorityLink={AddAuthorityLink}/>
                            }
                        </CardContent>
                    </Card>
                </React.Fragment>
            default:
                return 'Not yet implemented';
        }
    }
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div className={classes.paper}>


                {!AuthorityType && <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h2 id="simple-modal-title">Linked authorities</h2>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Authority</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={Authority_Type}
                                onChange={e => { setAuthority_Type(e.target.value) }}
                            >
                                <MenuItem value={10}>Authors</MenuItem>
                                <MenuItem value={20}>Subject headings</MenuItem>
                                <MenuItem value={30}>Publishers</MenuItem>
                                <MenuItem value={40}>Series</MenuItem>
                                <MenuItem value={50}>Sub-series</MenuItem>
                                <MenuItem value={60}>Collection Title</MenuItem>
                                <MenuItem value={70}>Uniform Titles</MenuItem>
                                <MenuItem value={80}>Class number</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>}
                {renderSwitch()}


            </div>


        </Modal>
    );
}
export default SearchAuthority