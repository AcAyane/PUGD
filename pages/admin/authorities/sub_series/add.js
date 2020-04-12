import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { INSERT_SUB_SERIES } from '../../../../graphql/mutations/admin/authorities/sub_series.mutations';
import { useMutation } from '@apollo/react-hooks';
import AddSubSeriesForm from '../../../../components/admin/authorities/sub_series/AddSubSeriesForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import Router from 'next/router';


const AddSubSeries = () => {

    const [insertSubSeries] = useMutation(INSERT_SUB_SERIES, {
        onCompleted: () => {
            Router.push("/admin/authorities/sub_series")

        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (
        Name,
        Issn,
        Publisher,
        Parent_series,
        Website,
        Comment,
        Url_thumbnail,
        Linked_authorities) => {


    const sub_series = {
        Website,
        Comment,
        Url_thumbnail,
        Name,
        Issn,
        Parent_series,
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


    if (Publisher !== "") {
        sub_series.Publisher = Publisher
    }
    if (Parent_series !== "") {
        sub_series.Parent_series = Parent_series
    } 
    
    insertSubSeries({
        variables: sub_series
    });
}

return (
    <div className="animate fadeLeft">
        <AuthorityHeader Authority="Sub-series" />
        <Card  >
            <CardContent>
                <h4 >Création d'une Sub-series</h4>
                <AddSubSeriesForm onAddHandler={onAddHandler} />
                <br /><br />
            </CardContent>
        </Card>
    </div>
);
};


AddSubSeries.Layout = AdminLayout

export default AddSubSeries;
