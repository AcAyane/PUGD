import * as React from 'react';

import ApolloClient from 'apollo-boost';

// or you can use `import gql from 'graphql-tag';` instead
import { gql } from "apollo-boost";

// this is the Apollo Client, u have to change the uri of the GraphQL server end point
const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});


export interface IAppProps {
}

export interface IAppState {
}

export default class test extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }
    testQuery() {

        client
            .query({
                query: gql`
                        {
                        rates(currency: "USD") {
                        currency
                        }
                    }
`
            })
            .then(result => console.log(result));

    }
    public render() {
        return (
            <div>
                {this.testQuery}
            </div>
        );
    }
}

