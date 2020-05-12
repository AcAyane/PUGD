import { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Header extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <link
            href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
            rel="stylesheet"
          /> */}
          {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          /> */}
          <link rel="stylesheet" href="/css/style.min.css" />
          <link href="/public/static/materialize.min.css" rel="stylesheet" />
          <link href="/public/static/style.min.css" rel="stylesheet" />
        </Head>
        <Link href="./">
          <button>Go to index</button>
        </Link>
        <Link href="./test">
          <button>Go to test</button>
        </Link>
        <Link href="./createBook">
          <button>Create Book</button>
        </Link>
      </div>
    );
  }
}
