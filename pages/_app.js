import React from 'react';
import App from 'next/app';

import { ApolloProvider } from '@apollo/react-hooks';
import SideBar from '../components/Layout/sideBar';
import HeaderBar from '../components/Layout/headerNav';
import { withApollo } from '../lib/apollo';
import Protect from '../shared/protect';
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo, router } = this.props;
    // if (router.pathname.startsWith('/front-office/'))
    if (router.pathname === '/auth/login')
      return (
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      );
    else
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

export default withApollo()(Protect(MyApp));
