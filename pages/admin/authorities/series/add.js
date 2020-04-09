import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { INSERT_SERIES } from '../../../../graphql/mutations/admin/authorities/series.mutations';
import { useMutation } from '@apollo/react-hooks';
import AddSeriesForm from '../../../../components/admin/authorities/series/AddSeriesForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import Router from 'next/router';


const AuthorPage = () => {

    const [insertSeries] = useMutation(INSERT_SERIES, {
        onCompleted: () => {
            Router.push("/admin/authorities/series")
        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (
        Title,
        Issn,
        Publisher,
        Website,
        Comment,
        URL_thumbnail,
        Linked_authorities) => {
        const series = {
            Title,
            Issn,
            Website,
            Comment,
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
  
        
        if( Publisher!=="")
        {
            series.Publisher=Publisher
        }
        
        insertSeries({
            variables:series
        });
    }

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Series" />
            <Card  >
                <CardContent>
                    <h4 >Création d'une series</h4>
                    <AddSeriesForm onAddHandler={onAddHandler} />
                    <br /><br />
                </CardContent>
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
