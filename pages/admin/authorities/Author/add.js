import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { INSERT_AUTHOR } from '../../../../graphql/mutations/admin/authorities/author.mutations';
import { useMutation } from '@apollo/react-hooks';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';

import AddAuthorForm from '../../../../components/admin/authorities/author/AddAuthorForm';
import Router from 'next/router';



const AuthorPage = () => {

    const [insertAuthor] = useMutation(INSERT_AUTHOR, {
        onCompleted: () => {
            Router.push("/admin/authorities/author")

        },
        onError: (error) => {
            alert(error.message);
        }
    });

    const onAddHandler = (e,
        Author_Type,
        Name_Auth,
        IndexName_Auth,
        Year_Auth,
        City_Auth,
        Country_Auth,
        WebSite_Auth,
        ISNI_Auth,
        UrlThumbnail_Auth,
        Note_Auth,
        Subdivision_Auth,
        Linked_authorities) => {
        e.preventDefault();
        insertAuthor({
            variables: {
                Author_Type,
                Name_Auth,
                IndexName_Auth,
                Year_Auth,
                City_Auth,
                Note_Auth,
                Country_Auth,
                WebSite_Auth,
                ISNI_Auth,
                Subdivision_Auth,
                UrlThumbnail_Auth,
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
        });
    }

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Authors" />
            <Card  >
                <CardContent>
                    <h4 >Création d'un auteur</h4>
                    <AddAuthorForm onAddHandler={onAddHandler} />
                    <br /><br />
                </CardContent>
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
