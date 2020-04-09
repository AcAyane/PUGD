import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { GET_SERIES_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/series.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import { Alert } from 'reactstrap';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import SearchSeriesComponent from '../../../../components/admin/authorities/series/SearchSeriesComponent';
import ListSeriesComponent from '../../../../components/admin/authorities/series/ListSeriesComponent';
import { CardContent, Card } from '@material-ui/core';

const SeriesPage = () => {

    const [getSeriesAllFields, SeriesResponse ] = useLazyQuery(GET_SERIES_ALL_FIELDS);
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Series" />
            <Card  >
                <CardContent>
                    <SearchSeriesComponent getSeriesAllFields={getSeriesAllFields} />
                </CardContent>
            </Card>

            <Card  >
                <CardContent>
                    <h4 className="card-title">Recherche : Series</h4>
                    {SeriesResponse.error ? <Alert color="danger">{String(SeriesResponse.error.message)}</Alert> : null}
                    {SeriesResponse.data &&
                        <ListSeriesComponent series={SeriesResponse.data.series_all_fields} />
                    }
                </CardContent>
            </Card>
        </div>
    );
};


SeriesPage.Layout = AdminLayout

export default SeriesPage;
