import React from 'react';
import App from 'next/app';
import protect from '../shared/protect'; 
class MyApp extends App {
  render() {


    const { Component, pageProps, router } = this.props;



    return (
      <Component {...pageProps} />
    )
  }
} 
// export default protect(MyApp);
export default MyApp;
