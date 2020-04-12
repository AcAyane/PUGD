import React from 'react';
import AdminLayout from '../../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { UPDATE_AUTHOR } from '../../../../../graphql/mutations/admin/authorities/author.mutations';
import { GET_AUTHOR } from '../../../../../graphql/queries/admin/authorities/author.queries';
import { useMutation,useQuery } from '@apollo/react-hooks';
import AuthorityHeader from '../../../../../components/admin/authorities/shared/authorityHeader';

import AddAuthorForm from '../../../../../components/admin/authorities/author/AddAuthorForm';
import Router from 'next/router';

// import {parse} from 'graphql';

const AuthorPage = () => {
   
    const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
        onCompleted: () => {
            Router.push("/admin/authorities/author")

        },
        onError: (error) => {
            alert(error.message);
        }
    });


    const { loading, error, data }= useQuery(GET_AUTHOR, {
        
        variables:{
            Id:Router.query.id
        },
        onError: (error) => {
            alert(error.message);
        }
    });
    
    const onAddHandler = (
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
       
            updateAuthor({
            variables: {
                Id:Router.query.id,
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
        data && data.author.length > 0 && <div className="animate fadeLeft">
            <AuthorityHeader Authority="Authors" />
            <Card  >
                <CardContent>
                    <h4 >Création d'un auteur</h4>
                    <AddAuthorForm 
                    onAddHandler={onAddHandler} 
                    author={
                        {
                        Author_Type: data.author[0].author_type,
                        Name_Auth: data.author[0].name_auth,
                        IndexName_Auth: data.author[0].indexname_auth,
                        Year_Auth: data.author[0].year_auth,
                        City_Auth: data.author[0].city_auth,
                        Country_Auth: data.author[0].country_auth,
                        WebSite_Auth: data.author[0].website_auth,
                        ISNI_Auth: data.author[0].isni_auth,
                        UrlThumbnail_Auth: data.author[0].url_thumbnail_auth,
                        Note_Auth: data.author[0].note_auth,
                        Subdivision_Auth: data.author[0].subdivision_auth,
                        Linked_authorities: data.author[0].linked_authoritiess,
                    }
                    }/>
                    <br /><br />
                </CardContent>
            </Card>
        </div> || <div>Please provide a valid Id</div>      

    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;



//     const GET_AUTHOR = parse(`
//     query(
//       $Id : String,
//       $Author_Type : Int,
//       $Name_Auth : String,
//       $IndexName_Auth : String,
//       $Year_Auth : String,
//       $City_Auth : String,
//       $Note_Auth : String,
//       $Country_Auth : String,
//       $WebSite_Auth : String,
//       $ISNI_Auth : String,
//       $Subdivision_Auth : String,
//       $UrlThumbnail_Auth : String,   
//     ){
//       author(
//         id:$Id,
//         author_type:$Author_Type,
//         name_auth:$Name_Auth,
//         indexname_auth:$IndexName_Auth,
//         year_auth:$Year_Auth,
//         city_auth:$City_Auth,
//         note_auth:$Note_Auth,
//         country_auth:$Country_Auth,
//         website_auth:$WebSite_Auth,
//         isni_auth:$ISNI_Auth,
//         subdivision_auth:$Subdivision_Auth,
//         urlthumbnail_auth:$UrlThumbnail_Auth,
//       ){
//         _id
//         author_type
//         city_auth
//         country_auth
//         indexname_auth
//         isni_auth
//         name_auth
//         note_auth
//         subdivision_auth
//         url_thumbnail_auth
//         website_auth
//         year_auth
//       }
//     }
//   `)