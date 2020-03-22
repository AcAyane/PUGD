import React from 'react';
import App from 'next/app'; 

import Protect from '../shared/protect';  
// import AdminLayout from '../components/adminLayout';
class MyApp extends App {  
  render() {

    const { Component, pageProps, router } = this.props;
    const Layout = Component.Layout 
 
      if(router.pathname.startsWith("/admin") || router.pathname === "/")
      return (
    
              <Layout>
              <Component {...pageProps} />
              </Layout>
        
      )
      else 
     return  <Component {...pageProps} />
  }
}

 
export default  Protect(MyApp) ;
