import React from 'react';
import AdminLayout from '@/components/adminLayout';
import { GET_BASKET } from '@/graphql/queries/admin/authorities/basket.queries';
import { useQuery } from '@apollo/react-hooks';

import ListBasketComponent from '@/components/admin/authorities/basket/ListBasketComponent';
import Card from '@/components/ui/card/card';
import WithAdminLayout from '@/shared/WithAdminLayout';
import { withApollo } from '@/shared/apollo';


const AuthorPage = () => {

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

            }
        });

    return (
        <div className="animate fadeLeft">
            <Card  >
                <h4 className="card-title">Baskets</h4>
                {error ? <div color="danger">{String(error)}</div> : null}
                {data &&
                    <ListBasketComponent Baskets={data.basket} />
                }
            </Card>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

// export default withApollo({ ssr: true })(AuthorPage);
export default WithAdminLayout(withApollo({ ssr: true })(AuthorPage)); 
 