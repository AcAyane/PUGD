import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../util/apollo-client';

import SideBar from '../components/Layout/sideBar'
import HeaderBar from '../components/Layout/headerNav'


class MyApp extends App {
  token = '';


  render() {
    const { Component, pageProps, apollo, router } = this.props;

    // console.log(apollo)
    if (router.pathname === '/' || router.pathname === '/signup')
      return (

        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      ); else
      return (

        <ApolloProvider client={apollo}>
          <HeaderBar />
          <SideBar />

          <div className="container">
            <div id="main">
              <Component {...pageProps} />
            </div>
          </div>

        </ApolloProvider>
      );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
