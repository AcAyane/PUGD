import React from 'react';
import { GET_SERIES_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/series.queries';
import { useLazyQuery } from '@apollo/react-hooks';

import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import SearchSeriesComponent from '../../../../components/admin/authorities/series/SearchSeriesComponent';
import ListSeriesComponent from '../../../../components/admin/authorities/series/ListSeriesComponent';
import Card from '../../../../components/ui/Card/Card'
import WithAdminLayout from '../../../../shared/WithAdminLayout';
import { withApollo } from '../../../../shared/apollo';

const SeriesPage = () => {

    const [getSeriesAllFields, SeriesResponse] = useLazyQuery(GET_SERIES_ALL_FIELDS);
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Series" />
            <Card  >
                <SearchSeriesComponent getSeriesAllFields={getSeriesAllFields} />
            </Card>
            <Card  >
                <h4 className="card-title">Recherche : Series</h4>
                {SeriesResponse.error ? <div color="danger">{String(SeriesResponse.error.message)}</div> : null}
                {SeriesResponse.data &&
                    <ListSeriesComponent series={SeriesResponse.data.series_all_fields} />
                }

            </Card>
        </div>
    );
};



export default WithAdminLayout(withApollo({ ssr: true })(SeriesPage)); 
