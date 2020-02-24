import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

// import test from './test';
import withData from '../util/apollo-client';

class MyApp extends App {

    render() {
        const { Component, pageProps, apollo, router } = this.props;
        if (router.pathname.startsWith('/front-office/')) {
            return (
                <ApolloProvider client={apollo}>
                    {/* <Header /> */}
                    <Component {...pageProps} />
                </ApolloProvider>
            )
        }

        return (
            <ApolloProvider client={apollo}>
                <Component {...pageProps} />
            </ApolloProvider>
        )

    }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);