import React from 'react'; 
<<<<<<< HEAD
import Card from '../../../../components/ui/Card/Card';

import AddCollectionTitleForm from '../../../../components/admin/authorities/collection_title/AddCollectionTitleForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
=======
import Card from '@/components/ui/card/card';

import AddCollectionTitleForm from '@/components/admin/authorities/collection_title/AddCollectionTitleForm';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';
>>>>>>> develop
 


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

 
<<<<<<< HEAD
import AdminLayout from '../../../../components/adminLayout';
=======
import AdminLayout from '@/components/adminLayout';
>>>>>>> develop
AddCollectionTitle.Layout = AdminLayout
export default AddCollectionTitle; 
 