import React from 'react';
import Card from '@/components/ui/card/card';

import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';
import AddAuthorForm from '@/components/admin/authorities/author/AddAuthorForm';

const AddAuthorPage = () => {

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Authors" />
            <Card >
                <h4 >Création d'un auteur</h4>
                <AddAuthorForm />
                <br /><br />
            </Card>
        </div>
    );
};
import AdminLayout from '@/components/adminLayout';
AddAuthorPage.Layout = AdminLayout
export default AddAuthorPage;
