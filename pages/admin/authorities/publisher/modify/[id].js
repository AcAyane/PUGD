import React from 'react';
import AuthorityHeader from '../../../../../components/admin/authorities/shared/authorityHeader';

import ModifyPublisherForm from '../../../../../components/admin/authorities/publisher/ModifyPublisherForm';

import Card from '../../../../../components/ui/Card/Card';
import WithAdminLayout from '../../../../../shared/WithAdminLayout';
import { withApollo } from '../../../../../shared/apollo';

const ModifyPublisherPage = () => {

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="publishers" />
            <Card >
                <h5 >Modification d'un publisher</h5>
                <ModifyPublisherForm />
                <br /><br />
            </Card>
        </div> || <div>Please provide a valid Id</div>

    );
};


export default WithAdminLayout(withApollo({ ssr: true })(ModifyPublisherPage))