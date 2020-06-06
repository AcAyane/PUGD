import React from 'react';
import AdminLayout from '@/components/adminLayout';
import { GET_BASKET } from '@/graphql/queries/admin/authorities/basket.queries';
import { useQuery } from '@apollo/react-hooks';

import ListBasketComponent from '@/components/admin/authorities/basket/ListBasketComponent';
import Card from '@/components/ui/card/card';
import WithAdminLayout from '@/shared/WithAdminLayout';
import { withApollo } from '@/shared/apollo';


const AuthorPage = () => {
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

            }
        });

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Paniers Gestion : Gestion des paniers" />
            {/* <Card  >
                <h4 className="card-title">Baskets</h4>
                {error ? <div color="danger">{String(error)}</div> : null}
                {data &&
                    <ListBasketComponent Baskets={data.basket} />
                }
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

        </div>
    );
};


AuthorPage.Layout = AdminLayout

// export default withApollo({ ssr: true })(AuthorPage);
export default AuthorPage;