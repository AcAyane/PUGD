import React, { useState } from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { FaCircle } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Divider, Card, CardContent } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Add from '@material-ui/icons/Add';
// import { withApollo } from '../../../../shared/apollo';


import SimpleModal from '../../../../components/admin/authorities/SearchAuthor'

import { INSERT_AUTHOR } from '../../../../graphql/mutations/admin/authorities/author.mutations';
import { useMutation } from '@apollo/react-hooks';
import LinkedAuthorityView from '../../../../components/admin/authorities/LinkedAuthorityView';
import AddCategoryForm from '../../../../components/admin/authorities/category/AddCategoryForm';
import AuthorityHeader from '../../../../components/admin/authorities/authorityHeader';



const AuthorPage = () => {

    const [insertAuthor] = useMutation(INSERT_AUTHOR);



    const onAddHandler = (e) => {
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
                    return authority.id.split('"')[1]
                })
            }
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

            {/* <style jsx>
                {`
    
      .uk-icon { 
        margin-left:10px;
      display:inline-block;
    }
    .blue-gradient{
      background: linear-gradient(45deg,#0288d1,#26c6da)!important;
    }
    .MuiExpansionPanelSummary-expandIcon {
        transform: rotate(0deg);
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    
    `

                }
            </style> */}
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
