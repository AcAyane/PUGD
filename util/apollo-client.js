// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';


// import {ApolloLink} from 'apollo-boost'
// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL =  process.env.MANGO_URI;



const httpLink = new HttpLink({ uri: GRAPHQL_URL });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  //If we're client side

    const token = localStorage.getItem('token');
     // Use the setContext method to set the HTTP headers.
  operation.setContext({
    uri:GRAPHQL_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });



  // Call the next link in the middleware chain.
  return forward(operation);
});



// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(

  ({ headers, ctx, initialState }) =>
  {

     return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    } )
  }

);
