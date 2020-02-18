import React from 'react';
import logo from './logo.svg';
import './App.css';

import Test from "./Components/test"

import ApolloClient from 'apollo-boost';

// or you can use `import gql from 'graphql-tag';` instead
import { gql } from "apollo-boost";

// this is the Apollo Client, u have to change the uri of the GraphQL server end point
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

function testQuery() {

  client
    .query({
      query: gql`
                  {
                  rates(currency: "USD") {
                  currency
                  }
              }
`
    })
    .then(result => console.log(result));

}
function App() {
  return (
    <div className="App">
      {testQuery}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
