import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { GET_AUTHOR_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/author.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader'
import SearchAuthorComponent from '../../../../components/admin/authorities/author/SearchAuthorComponent';
import ListAuthorComponent from '../../../../components/admin/authorities/author/ListAuthorComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import {parse} from 'graphql';
// const GET_AUTHOR_ALL_FIELDS = parse(`
// query($all_fields: String!){
//     author_all_fields(all_fields:$all_fields){
//       _id
//       author_type
//       city_auth
//       country_auth
//       indexname_auth
//       isni_auth
//       name_auth
//       note_auth
//       subdivision_auth
//       url_thumbnail_auth
//       website_auth
//       year_auth
//     }
//   }
  
  
// `)

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
                    {error ? <div color="danger">{String(error)}</div> : null}
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
