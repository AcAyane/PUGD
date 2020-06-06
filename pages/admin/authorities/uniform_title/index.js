import React from 'react';
import { GET_UNIFORM_TITLE } from '../../../../graphql/queries/admin/authorities/uniform_title.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import SearchUniformTitleComponent from '../../../../components/admin/authorities/uniform_title/SearchUniformTitleComponent';
import ListUniformTitleComponent from '../../../../components/admin/authorities/uniform_title/ListUniformTitleComponent';
import Card from '../../../../components/ui/Card/Card'; 

const UniformTitlePage = () => {

    const [getUniformTitleAllFields, UniformTitleResponse] = useLazyQuery(GET_UNIFORM_TITLE);
console.log(UniformTitleResponse);

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Catégories" />
            <Card  >
                <SearchUniformTitleComponent getUniformTitleAllFields={getUniformTitleAllFields} />
            </Card>

            <Card  >
                <h4 className="card-title">Recherche : UniformTitle</h4>
                {UniformTitleResponse.error ? <div color="danger">{String(UniformTitleResponse.error.message)}</div> : null}
                {UniformTitleResponse.data &&
                    <ListUniformTitleComponent uniform_titles={UniformTitleResponse.data.uniform_title} />
                }
            </Card>
        </div>
    );
};
 
import AdminLayout from '../../../../components/adminLayout';
UniformTitlePage.Layout = AdminLayout
export default UniformTitlePage; 
 
 
 