import React, { useState } from 'react';
import AdminLayout from '@/components/adminLayout';
import { GET_BASKET } from '@/graphql/queries/admin/authorities/basket.queries';
import { useQuery } from '@apollo/react-hooks';

import ListBasketComponent from '@/components/admin/authorities/basket/ListBasketComponent';
import Card from '@/components/ui/Card/Card';
import WithAdminLayout from '../../../../../shared/WithAdminLayout';
import { withApollo } from '../../../../../shared/apollo';
import CollapsibleHeader from '@/components/ui/Collapsible/CollapsibleHeader';
import Collapsible from '@/components/ui/Collapsible/Collapsible';
import CollapsibleBody from '@/components/ui/Collapsible/CollapsibleBody';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';
import Table from '@/components/ui/Table/Table';
import RoundButton from '@/components/ui/RoundButton/RoundButton';


// const BasketPage = ({ basket }) => {
const BasketPage = () => {
    const basket = {
        "_id": "ObjectID(\"5e9b638fb6debfec27586cd5\")",
        "basket_name": "test",
        "basket_color": "",
        "basket_note": "",
        "basket_type": "author",
        "basket_elements": [
            {
                "element_type": "author",
                "element": {
                    "_id": "ObjectID(\"5ebaff519aa99380cdd16f9a\")",
                    "name": "Name_Auth", "__typename": "AuthorType"
                }
            },
            {
                "element_type": "author",
                "element": {
                    "_id": "ObjectID(\"5ed67166c1a9a205a912fb9a\")",
                    "name": "Name_Auth", "__typename": "AuthorType"
                }
            }]
    }
    return (

        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Paniers Gestion : Gestion des paniers" />


            <Card  >
                <Table
                    Thead={
                        <tr>
                            <td></td>
                            <td>Total</td>
                        </tr>
                    }
                    Tbody={
                        <tr>
                            <td>Ce panier contient</td>
                            <td>{basket.basket_elements.length}</td>
                        </tr>
                    }
                />
            </Card>

            <Card  >
                <Table
                    Tbody={
                        basket.basket_elements.map((basket_element) => {
                            console.log("basket_element", basket_element);

                            return <tr key={basket_element.element._id}>
                                <td> </td>
                                <td>{basket_element.element.name}</td>
                                <td>
                                    <RoundButton icon="delete_forever" size="30"
                                        // onClick={(e) => {
                                        //     OnAuthorityLinkChange(index, undefined)
                                        // }}
                                        style={{ margin: "auto" }} /></td>

                            </tr>
                        })
                    }
                />
            </Card>
        </div>
    );
};


BasketPage.Layout = AdminLayout

export default WithAdminLayout(withApollo({ ssr: true })(BasketPage));
