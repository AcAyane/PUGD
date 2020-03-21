import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import SideBar from '../components/Layout/sidenav/sideBar'
import HeaderBar from '../components/Layout/headerNav'
import { withApollo } from '../shared/apollo'
import Protect from '../shared/protect';  
class MyApp extends App { 
  render() {

    const { Component, pageProps, router } = this.props;

 
      if(router.pathname.startsWith("/admin") || router.pathname === "/")
      return (
        <div>
          <HeaderBar />
          <SideBar />

          <div className="container">
            <div id="main">
              <Component {...pageProps} />
            </div>
          </div>
          </div>
      )
      else 
     return  <Component {...pageProps} />
  }
}

 
export default withApollo({ ssr: true })(Protect( MyApp));
