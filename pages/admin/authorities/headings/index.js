import React, { useState } from 'react';
import AdminLayout from '../../../../components/adminLayout';
import {  CardContent, Card } from '@material-ui/core';
import { Alert } from 'reactstrap';
import AuthorityHeader from '../../../../components/admin/authorities/authorityHeader'; 
import { GET_CATEGORY_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/category.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import SearchCategoryComponent from '../../../../components/admin/authorities/category/SearchCategoryComponent';
import ListCategoryComponent from '../../../../components/admin/authorities/category/ListCategoryComponent';

 
const CategoryPage = () => {

    const [getCategoryAllFields, CategoryResponse] = useLazyQuery(GET_CATEGORY_ALL_FIELDS ); 
 
    return (
        <div className="animate fadeLeft">

            <AuthorityHeader Authority="Catégories" />
            <Card  >
                <CardContent> 
                    <SearchCategoryComponent getCategoryAllFields={getCategoryAllFields} />
                </CardContent>
            </Card>


            <Card  >
                <CardContent>
                    <h4 className="card-title">Recherche : Auteurs</h4>
                    {CategoryResponse.error ? <Alert color="danger">{String(CategoryResponse.error.message)}</Alert> : null}
                    {CategoryResponse.data &&
                        <ListCategoryComponent categories={CategoryResponse.data.category_all_fields} /> 
                    }
                </CardContent>
            </Card>

            <style jsx>
                {`
    
      .uk-icon { 
        margin-left:10px;
      display:inline-block;
    }
    .blue-gradient{
      background: linear-gradient(45deg,#0288d1,#26c6da)!important;
    }
    `

                }
            </style>
        </div>
    );
};


CategoryPage.Layout = AdminLayout

export default CategoryPage;
