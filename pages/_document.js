import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.min.css" /> 
          
          
        </Head>
        <body> 
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument