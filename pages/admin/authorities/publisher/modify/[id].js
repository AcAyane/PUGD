import React from 'react';
import AuthorityHeader from '../../../../../components/admin/authorities/shared/authorityHeader';

import ModifyPublisherForm from '../../../../../components/admin/authorities/publisher/ModifyPublisherForm';

import Card from '../../../../../components/ui/Card/Card'; 
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

 
import AdminLayout from '../../../../../components/adminLayout';
ModifyPublisherPage.Layout = AdminLayout
export default ModifyPublisherPage; 

 