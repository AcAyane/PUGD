import React from 'react';
import Card from '../../../../components/ui/Card/Card';

import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import AddAuthorForm from '../../../../components/admin/authorities/author/AddAuthorForm';
import WithAdminLayout from '../../../../shared/WithAdminLayout';

const AuthorPage = () => {

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Authors" />
            <Card  >
                <h4 >Création d'un auteur</h4>
                <AddAuthorForm />
                <br /><br />
            </Card>
        </div>
    );
};
export default WithAdminLayout(AuthorPage);
