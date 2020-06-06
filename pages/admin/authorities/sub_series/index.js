import React from 'react';
import { GET_SUB_SERIES_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/sub_series.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../@/components/admin/authorities/shared/authorityHeader';
import SearchSubSeriesComponent from '../@/components/admin/authorities/sub_series/SearchSubSeriesComponent';
import ListSubSeriesComponent from '../@/components/admin/authorities/sub_series/ListSubSeriesComponent';
import Card from '../@/components/ui/Card/Card'; 

const CategoryPage = () =>  { 

    const [getSubSeriesAllFields, SubSeriesResponse] = useLazyQuery(GET_SUB_SERIES_ALL_FIELDS);
console.log(SubSeriesResponse);

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Catégories" />
            <Card  >
                <SearchSubSeriesComponent getSubSeriesAllFields={getSubSeriesAllFields} />

            </Card>

            <Card  >
                <h4 className="card-title">Recherche : Sub-Series</h4>
                {SubSeriesResponse.error ? <div color="danger">{String(SubSeriesResponse.error.message)}</div> : null}
                {SubSeriesResponse.data &&
                    <ListSubSeriesComponent sub_series={SubSeriesResponse.data.sub_series_all_fields} />
                }

            </Card>
        </div>
    );
};
 
import AdminLayout from '../@/components/adminLayout';
CategoryPage.Layout = AdminLayout
export default CategoryPage; 
 