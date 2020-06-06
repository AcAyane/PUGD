import React from 'react';

<<<<<<< HEAD
import AddUniformTitleForm from '../../../../components/admin/authorities/uniform_title/AddUniformTitleForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';

import Card from '../../../../components/ui/Card/Card'; 
=======
import AddUniformTitleForm from '@/components/admin/authorities/uniform_title/AddUniformTitleForm';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';

import Card from '@/components/ui/card/card'; 
>>>>>>> develop


const UniformTitlePage = () => {

    return (
        <div className="animate fadeLeft">

            <AuthorityHeader Authority="Uniform title" />

            <Card  >
                <h4 >Création d'une Uniform title</h4>
                <AddUniformTitleForm />
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
UniformTitlePage.Layout = AdminLayout
export default UniformTitlePage;  