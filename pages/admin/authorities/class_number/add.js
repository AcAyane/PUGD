import React from 'react'; 
import Card from '../../../../components/ui/Card/Card';


import AddClassNumberForm from '../../../../components/admin/authorities/class_number/AddClassNumberForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import WithAdminLayout from '../../../../shared/WithAdminLayout';

const AddClassNumber = () => {

 
    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Class-Number" />
            <Card  >
                <h4 >Création d'une Class-Number</h4>
                <AddClassNumberForm />
                <br /><br />
            </Card>
        </div>
    );
};
 

export default WithAdminLayout(AddClassNumber);
