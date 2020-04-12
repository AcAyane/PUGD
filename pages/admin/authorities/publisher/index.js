import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { GET_PUBLISHER_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/publisher.queries';
import { useLazyQuery } from '@apollo/react-hooks'; 
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import SearchPublisherComponent from '../../../../components/admin/authorities/publisher/SearchPublisherComponent';
import ListPublisherComponent from '../../../../components/admin/authorities/publisher/ListPublisherComponent';
import { CardContent, Card } from '@material-ui/core';

const PublisherPage = () => {

    const [getPublisherAllFields, PublisherResponse ] = useLazyQuery(GET_PUBLISHER_ALL_FIELDS);
    console.log(PublisherResponse);
    
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Publishers" />
            <Card  >
                <CardContent>
                    <SearchPublisherComponent getPublisherAllFields={getPublisherAllFields} />
                </CardContent>
            </Card>

            <Card  >
                <CardContent>
                    <h4 className="card-title">Recherche : Publishers</h4>
                    {PublisherResponse.error ? <div color="danger">{String(PublisherResponse.error.message)}</div> : null}
                    {PublisherResponse.data &&
                        <ListPublisherComponent publishers={PublisherResponse.data.publisher_all_fields} />
                    }
                </CardContent>
            </Card>
        </div>
    );
};


PublisherPage.Layout = AdminLayout

export default PublisherPage;
