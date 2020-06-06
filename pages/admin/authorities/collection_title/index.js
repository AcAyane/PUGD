import React from 'react';
import { GET_COLLECTION_TITLE } from '@/graphql/queries/admin/authorities/collection_title.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';
import SearchCollectionTitleComponent from '@/components/admin/authorities/collection_title/SearchCollectionTitleComponent';
import ListCollectionTitleComponent from '@/components/admin/authorities/collection_title/ListCollectionTitleComponent';
import Card from '@/components/ui/card/card'; 

const CollectionTitlePage = () => {

    const [getCollectionTitleAllFields, CollectionTitleResponse] = useLazyQuery(GET_COLLECTION_TITLE);
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Class bumber" />
            <Card  >
                <SearchCollectionTitleComponent getCollectionTitleAllFields={getCollectionTitleAllFields} />
            </Card>

            <Card  >
                <h4 className="card-title">Recherche : collection title</h4>
                {CollectionTitleResponse.error ? <div color="danger">{String(CollectionTitleResponse.error.message)}</div> : null}
                {CollectionTitleResponse.data &&
                    <ListCollectionTitleComponent collection_titles={CollectionTitleResponse.data.collection_title} />
                }
            </Card>
        </div>
    );
};
import AdminLayout from '@/components/adminLayout';
CollectionTitlePage.Layout = AdminLayout
export default CollectionTitlePage; 
  