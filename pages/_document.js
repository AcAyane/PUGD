import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  //   }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/css/materialize.min.css" />
          <link rel="stylesheet" href="/css/style.min.css" />
        </Head>
        <body className="login-form">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument