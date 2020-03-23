import React from 'react';
import App from 'next/app';

import { ApolloProvider } from '@apollo/react-hooks';
import SideBar from '../components/Layout/sideBar';
import HeaderBar from '../components/Layout/headerNav';
// import { withApollo } from '../lib/apollo';
import Protect from '../shared/protect';
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const Layout = Component.Layout;

    if (router.pathname.startsWith('/admin') || router.pathname === '/')
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    else return <Component {...pageProps} />;
  }
}

export default Protect(MyApp);
