import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { GET_AUTHOR_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/author.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import { Alert } from 'reactstrap';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader'
import SearchAuthorComponent from '../../../../components/admin/authorities/author/SearchAuthorComponent';
import ListAuthorComponent from '../../../../components/admin/authorities/author/ListAuthorComponent';
import { Card, CardContent } from '@material-ui/core';

const AuthorPage = () => {

    const [getAuthorAllFields, { error, data }] = useLazyQuery(GET_AUTHOR_ALL_FIELDS);

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Authors" />
            <Card  >
                <CardContent>
                    <SearchAuthorComponent getAuthorAllFields={getAuthorAllFields} />
                </CardContent>
            </Card>

            <Card  >
                <CardContent>
                    <h4 className="card-title">Recherche : Auteurs</h4>
                    {error ? <Alert color="danger">{String(error)}</Alert> : null}
                    {data &&
                        <ListAuthorComponent authors={data.author_all_fields} />
                    }
                </CardContent>
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
