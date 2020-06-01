import React from 'react'; 
import Card from '../../../../components/ui/Card/Card';

import AddPublisherForm from '../../../../components/admin/authorities/publisher/AddPublisherForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';

import WithAdminLayout from '../../../../shared/WithAdminLayout';


const AuthorPage = () => {

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Catégories" />
            <Card  > 
                    <h4 >Création d'un Publisher</h4>
                    <AddPublisherForm  />
                    <br /><br /> 
            </Card>
        </div>
    );
};

 

export default  WithAdminLayout(AuthorPage);
