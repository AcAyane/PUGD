import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';


import { useQuery } from '@apollo/react-hooks';


// or you can use `import gql from 'graphql-tag';` instead
import { gql } from "apollo-boost";


import { ApolloProvider } from '@apollo/react-hooks';

// this is the Apollo Client, u have to change the uri of the GraphQL server end point
const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});
const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => {
        return (<div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>);
    });
}

const App = () => (
    <ApolloProvider client={client}>
        <div>

        </div>
    </ApolloProvider>
);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
