import React from 'react';
import AuthorityHeader from '../../../../../components/admin/authorities/shared/authorityHeader';

import ModifyCollectionTitleForm from '../../../../../components/admin/authorities/collection_title/ModifyCollectionTitleForm';

import Card from '../../../../../components/ui/Card/Card';
import WithAdminLayout from '../../../../../shared/WithAdminLayout';
import { withApollo } from '../../../../../shared/apollo';

// import {parse} from 'graphql';

const ModifyCollectionTitlePage = () => {

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Collection Title" />
            <Card >
                <h5 >Modification d'un Collection Title</h5>
                <ModifyCollectionTitleForm />
                <br /><br />
            </Card>
        </div> || <div>Please provide a valid Id</div>

    );
};


export default WithAdminLayout(withApollo({ ssr: true })(ModifyCollectionTitlePage))