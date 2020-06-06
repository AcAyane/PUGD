<<<<<<< HEAD
import React, { useState } from 'react';
import AdminLayout from '../../../../../components/adminLayout';
import { GET_BASKET } from '../../../../../graphql/queries/admin/authorities/basket.queries';
import { useQuery } from '@apollo/react-hooks';

import ListBasketComponent from '../../../../../components/admin/authorities/basket/ListBasketComponent';
import Card from '../../../../../components/ui/Card/Card';
import WithAdminLayout from '../../../../../shared/WithAdminLayout';
import { withApollo } from '../../../../../shared/apollo';
import CollapsibleHeader from '../../../../../components/ui/Collapsible/CollapsibleHeader';
import Collapsible from '../../../../../components/ui/Collapsible/Collapsible';
import CollapsibleBody from '../../../../../components/ui/Collapsible/CollapsibleBody';
import AuthorityHeader from '../../../../../components/admin/authorities/shared/authorityHeader';
import Table from '../../../../../components/ui/Table/Table';
=======
import React from 'react';
import AdminLayout from '@/components/adminLayout';
import { GET_BASKET } from '@/graphql/queries/admin/authorities/basket.queries';
import { useQuery } from '@apollo/react-hooks';

import ListBasketComponent from '@/components/admin/authorities/basket/ListBasketComponent';
import Card from '@/components/ui/card/card';
import WithAdminLayout from '@/shared/WithAdminLayout';
import { withApollo } from '@/shared/apollo';
>>>>>>> develop


const AuthorPage = () => {

<<<<<<< HEAD
    
    const [baskets, setBaskets] = useState({})

    const { loading, error, data } = useQuery(
        GET_BASKET,
        {
            // variables: {
            //     Basket: {
            //         basket_name: "test"
            //     }
            // },
            onCompleted: (data) => {
                console.log(data);

                const object = {}
                data.basket.forEach(element => {
                    if (!object[element.basket_type])
                        object[element.basket_type] = []
                    object[element.basket_type].push(element)
                });
                setBaskets(object);
                console.log(object);

=======
    const { loading, error, data } = useQuery(
        GET_BASKET,
        {
            variables: {
                Basket: {
                    basket_name: "test"
                }
            },
            onCompleted: (data) => {
                console.log(data);

>>>>>>> develop
            }
        });

    return (
<<<<<<< HEAD

        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Paniers Gestion : Gestion des paniers" />
            {/* <Card  >
=======
        <div className="animate fadeLeft">
            <Card  >
>>>>>>> develop
                <h4 className="card-title">Baskets</h4>
                {error ? <div color="danger">{String(error)}</div> : null}
                {data &&
                    <ListBasketComponent Baskets={data.basket} />
                }
<<<<<<< HEAD
            </Card> */}


            <Card  >
                {
                    Object.keys(baskets).map((basketType) => {
                        return <Collapsible key={basketType}  >
                            <li>
                                <CollapsibleHeader headerHeight="">
                                    Panier : {basketType}
                                </CollapsibleHeader>
                                <CollapsibleBody>
                                    {baskets[basketType] && baskets[basketType].map((basket) => {
                                        return <Table key={basket._id}
                                            Tbody={
                                                <tr >
                                                    <td> {basket.basket_name} </td>

                                                    <td>{basket.basket_elements.length} elements</td>
                                                    <td>
                                                        <div style={{ backgroundColor: basket.basket_color, width: "50px", height: "20px" }}>

                                                        </div>
                                                    </td>

                                                </tr>
                                            }
                                        />

                                    })
                                    }
                                </CollapsibleBody>
                            </li >
                        </Collapsible >



                    })
                }
            </Card>

=======
            </Card>
>>>>>>> develop
        </div>
    );
};


AuthorPage.Layout = AdminLayout

// export default withApollo({ ssr: true })(AuthorPage);
<<<<<<< HEAD
export default WithAdminLayout(withApollo({ ssr: true })(AuthorPage));
=======
export default WithAdminLayout(withApollo({ ssr: true })(AuthorPage)); 
 
>>>>>>> develop
