import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { INSERT_PUBLISHER } from '../../../../graphql/mutations/admin/authorities/publisher.mutations';
import { useMutation } from '@apollo/react-hooks';
import AddPublisherForm from '../../../../components/admin/authorities/publisher/AddPublisherForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import Router from 'next/router';


const AuthorPage = () => {

    const [insertPublisher] = useMutation(INSERT_PUBLISHER, {
        onCompleted: () => {
            Router.push("/admin/authorities/publisher")

        },
        onError: (error) => {
            alert(error.message);
        }
    });


    const onAddHandler = (
        Name ,
        Address1 ,
        Address2 ,
        Post_code ,
        Country ,
        City ,
        Website , 
        note ,
        url_thumbnail ,
        Supplier ,
        Linked_authorities ) => {

        
        const publisher = {
            Name ,
            Address1 ,
            Address2 ,
            Post_code ,
            Country ,
            City ,
            Website , 
            note ,
            url_thumbnail ,
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
  
        
        if( Supplier!=="")
        {
            publisher.Supplier=Supplier
        }
      
       
        console.log(publisher);
        
        insertPublisher({
            variables:publisher
        });
    }

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Catégories" />
            <Card  >
                <CardContent>
                    <h4 >Création d'un Publisher</h4>
                    <AddPublisherForm onAddHandler={onAddHandler} />
                    <br /><br />
                </CardContent>
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
