import React from 'react';
import { GET_AUTHOR } from '../../../../graphql/queries/admin/authorities/author.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../@/components/admin/authorities/shared/authorityHeader'
import SearchAuthorComponent from '../@/components/admin/authorities/author/SearchAuthorComponent';
import ListAuthorComponent from '../@/components/admin/authorities/author/ListAuthorComponent';
import Card from '../@/components/ui/Card/Card'; 



const AuthorPage = (props) => {
    const [getAuthorAllFields, { error, data, refetch }] = useLazyQuery(GET_AUTHOR);
    return (
        <div className="animate fadeLeft">

            <AuthorityHeader Authority="Authors" />

            <Card  >
                <SearchAuthorComponent getAuthorAllFields={getAuthorAllFields} />
            </Card>
            <Card  >
                <h4 className="card-title">Recherche : Auteurs</h4>
                {error ? <div color="danger">{String(error)}</div> : null}
                {data &&
                    <ListAuthorComponent authors={data.author} updateCache={refetch} />
                }

            </Card>
        </div>
    );
};
import AdminLayout from '../@/components/adminLayout';
AuthorPage.Layout = AdminLayout
export default AuthorPage  