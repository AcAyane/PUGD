import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { INSERT_CATEGORY } from '../../../../graphql/mutations/admin/authorities/category.mutations';
import { useMutation } from '@apollo/react-hooks';
import AddCategoryForm from '../../../../components/admin/authorities/category/AddCategoryForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import Router from 'next/router';


const AuthorPage = () => {

    const [insertCategory] = useMutation(INSERT_CATEGORY, {
        onCompleted: () => {
            Router.push("/admin/authorities/headings")

        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (e,
        Name,
        Scope_note,
        Comment,
        Broader_term,
        See,
        See_also,
        Authority_number,
        URL_thumbnail,
        Linked_authorities) => {
        e.preventDefault(); 
        
        const category = {
            Name,
            Scope_note,
            Comment,
            See_also : See_also.map((authority) => {
                return authority.id.split('"')[1]
            }),
            Authority_number,
            URL_thumbnail,
            Linked_authorities: Linked_authorities.map((authority) => {
                return {
                    Linked_Authority_Id: authority.id.split('"')[1],
                    Linked_Authority_Type: authority.Authority_Type,
                    Start: authority.Start,
                    End: authority.End,
                    Comment: authority.Comment,
                    LinkType: authority.LinkType,
                }
            }),
        }
  
        
        if( Broader_term!=="")
        {
            category.Broader_term=Broader_term
        }
        if(  See!=="")
        {
            category.See=See
        }
      
      
        console.log(Broader_term);
        console.log(category);
        
        insertCategory({
            variables:category
        });
    }

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Catégories" />
            <Card  >
                <CardContent>
                    <h4 >Création d'une catégory</h4>
                    <AddCategoryForm onAddHandler={onAddHandler} />
                    <br /><br />
                </CardContent>
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
