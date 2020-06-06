import React, { useState, useEffect } from 'react';
import Modal from '../../../ui/Modal/Modal';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import Card from '../../../ui/Card/Card';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_AUTHOR } from '../../../../graphql/queries/admin/authorities/author.queries';
import { GET_CATEGORY_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/category.queries';
import { GET_PUBLISHER_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/publisher.queries';
import { GET_SERIES_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/series.queries';
import dynamic from 'next/dynamic'

import SelectBox from '../../../ui/SelectBox';
import SearchAuthorComponent from '../author/SearchAuthorComponent';
import ListAuthorComponent from '../author/ListAuthorComponent';

import SearchCategoryComponent from '../category/SearchCategoryComponent'
import ListCategoryComponent from '../category/ListCategoryComponent'
import SearchPublisherComponent from '../publisher/SearchPublisherComponent'
import ListPublisherComponent from '../publisher/ListPublisherComponent'
import SearchSeriesComponent from '../series/SearchSeriesComponent'
import ListSeriesComponent from '../series/ListSeriesComponent'

const SearchAuthority = ({ addAuthor, open, handleClose, AuthorityType }) => {
    const [getAuthorAllFields, { loading, error, data }] = useLazyQuery(GET_AUTHOR);
 


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
    const renderSwitch = () => {
        switch (Authority_Type) {
            case 10:
                {

                    return <React.Fragment>
                        <Card  >
                            <SearchAuthorComponent
                                getAuthorAllFields={getAuthorAllFields}
                                SearchOnly />
                        </Card>
                        <Card  >
                            <h4 className="card-title">Recherche : Auteurs</h4>
                            {error ? <div color="danger">{String(error.message)}</div> : null}

                            <ListAuthorComponent authors={data && data.author} AddAuthorityLink={AddAuthorityLink} />

                        </Card>
                    </React.Fragment>
                }
            case 20:
                {


                    return <React.Fragment>
                        <Card  >
                            <SearchCategoryComponent getCategoryAllFields={getCategoryAllFields} SearchOnly />
                        </Card>
                        <Card  >
                            <h4 className="card-title">Recherche : Categories</h4>
                            {error ? <div color="danger">{String(error.message)}</div> : null}
                            {CategoryResponse.data &&
                                <ListCategoryComponent categories={CategoryResponse.data.category_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </Card>
                    </React.Fragment>
                }
            case 30:
                {

                    return <React.Fragment>
                        <Card  >
                            <SearchPublisherComponent getPublisherAllFields={getPublisherAllFields} SearchOnly />
                        </Card>
                        <Card  >
                            <h4 className="card-title">Recherche : Publishers</h4>
                            {error ? <div color="danger">{String(PublisherResponse.error.message)}</div> : null}
                            {PublisherResponse.data &&
                                <ListPublisherComponent publishers={PublisherResponse.data.publisher_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </Card>
                    </React.Fragment>
                }
            case 40:
                {

                    return <React.Fragment>
                        <Card  >
                            <SearchSeriesComponent getSeriesAllFields={getSeriesAllFields} SearchOnly />
                        </Card>
                        <Card  >
                            <h4 className="card-title">Recherche : Series</h4>
                            {SeriesResponse.error ? <div color="danger">{String(SeriesResponse.error.message)}</div> : null}
                            {SeriesResponse.data &&
                                <ListSeriesComponent series={SeriesResponse.data.series_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </Card>
                    </React.Fragment>
                }
            default:
                return 'Not yet implemented';
        }
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >

            {!AuthorityType &&
                <Grid >
                    <GridElement s={6}>
                        <h5 id="simple-modal-title">Linked authorities</h5>
                        <SelectBox
                            label="Authority"
                            value={Authority_Type}
                            onChange={e => { setAuthority_Type(Number(e.target.value)) }}>
                            <option value={10}>Authors</option>
                            <option value={20}>Subject headings</option>
                            <option value={30}>Publishers</option>
                            <option value={40}>Series</option>
                            <option value={50}>Sub-series</option>
                            <option value={60}>Collection Title</option>
                            <option value={70}>Uniform Titles</option>
                            <option value={80}>Class number</option>
                        </SelectBox>
                    </GridElement>
                </Grid>}
            {renderSwitch()}

        </Modal>
    );
}
export default SearchAuthority