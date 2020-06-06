import React from 'react';
<<<<<<< HEAD
import { GET_UNIFORM_TITLE } from '../../../../graphql/queries/admin/authorities/uniform_title.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import SearchUniformTitleComponent from '../../../../components/admin/authorities/uniform_title/SearchUniformTitleComponent';
import ListUniformTitleComponent from '../../../../components/admin/authorities/uniform_title/ListUniformTitleComponent';
import Card from '../../../../components/ui/Card/Card'; 

const UniformTitlePage = () => {

    const [getUniformTitleAllFields, UniformTitleResponse] = useLazyQuery(GET_UNIFORM_TITLE);
console.log(UniformTitleResponse);
=======
import { GET_CATEGORY_ALL_FIELDS } from '@/graphql/queries/admin/authorities/uniform_title.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';
import SearchUniformTitleComponent from '@/components/admin/authorities/uniform_title/SearchUniformTitleComponent';
import ListUniformTitleComponent from '@/components/admin/authorities/uniform_title/ListUniformTitleComponent';
import Card from '@/components/ui/card/card'; 

const UniformTitlePage = () => {

    const [getUniformTitleAllFields, UniformTitleResponse] = useLazyQuery(GET_CATEGORY_ALL_FIELDS);
>>>>>>> develop

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
<<<<<<< HEAD
                    <ListUniformTitleComponent uniform_titles={UniformTitleResponse.data.uniform_title} />
=======
                    <ListUniformTitleComponent categories={UniformTitleResponse.data.uniform_title_all_fields} />
>>>>>>> develop
                }
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
 
 
 