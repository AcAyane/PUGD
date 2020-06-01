import React from 'react'; 
import Card from '../../../../components/ui/Card/Card';

import AddCollectionTitleForm from '../../../../components/admin/authorities/collection_title/AddCollectionTitleForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import WithAdminLayout from '../../../../shared/WithAdminLayout';



const AddCollectionTitle = () => {

   
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Class-Number" />
            <Card  >
                <h4 >Création d'une Class-Number</h4>
                <AddCollectionTitleForm   />
                <br /><br />
            </Card>
        </div>
    );
};

 

export default WithAdminLayout(AddCollectionTitle);
