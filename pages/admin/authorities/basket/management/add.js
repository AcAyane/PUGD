import React from 'react';
import AdminLayout from '@/components/adminLayout';

import { INSERT_BASKET } from '@/graphql/mutations/admin/authorities/basket.mutations';
import { useMutation } from '@apollo/react-hooks';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';

import Router from 'next/router';
import AddBasketForm from '@/components/admin/authorities/basket/AddBasketForm';
import Card from '@/components/ui/card/card';


const AuthorPage = () => {

    const [insertBasket] = useMutation(INSERT_BASKET, {
        onCompleted: () => {
            Router.push("/admin/authorities/basket/management")

        },
        onError: (error) => {
            alert(error.message);
        }
    });

    const onAddHandler = (
        BasketName,
        BasketNote,
        BasketType,
        BasketColor,
        BasketElements, ) => {

        insertBasket({
            variables: {
                BasketName,
                BasketNote,
                BasketType,
                BasketColor,
                BasketElements
            }
        });
    }

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Authors" />
            <Card  >
                <h4 >Ajouter un panier</h4>
                <AddBasketForm onAddHandler={onAddHandler} />
                <br /><br />
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
