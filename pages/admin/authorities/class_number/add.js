import React from 'react';
import AdminLayout from '../../../../components/adminLayout';
import { Card, CardContent } from '@material-ui/core';
import { INSERT_CLASS_NUMBER } from '../../../../graphql/mutations/admin/authorities/class_number.mutations';
import { useMutation } from '@apollo/react-hooks';
import AddClassNumberForm from '../../../../components/admin/authorities/class_number/AddClassNumberForm';
import AuthorityHeader from '../../../../components/admin/authorities/shared/authorityHeader';
import Router from 'next/router';


const AddClassNumber = () => {

    const [insertClassNumber] = useMutation(INSERT_CLASS_NUMBER, {
        onCompleted: () => {
            Router.push("/admin/authorities/class_number")

        },
        onError: (error) => {
            alert(error.message);
        }
    });



    const onAddHandler = (
        Name,
        Subject_description,
        Url_thumbnail,
        Linked_authorities) => {


    const class_number = {
        Name,
        Subject_description,
        Url_thumbnail,
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
    insertClassNumber({
        variables: class_number
    });
}

return (
    <div className="animate fadeLeft">
        <AuthorityHeader Authority="Class-Number" />
        <Card  >
            <CardContent>
                <h4 >Création d'une Class-Number</h4>
                <AddClassNumberForm onAddHandler={onAddHandler} />
                <br /><br />
            </CardContent>
        </Card>
    </div>
);
};


AddClassNumber.Layout = AdminLayout

export default AddClassNumber;
