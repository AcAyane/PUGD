import gql from 'graphql-tag';

const REGISTER_QUERY = gql`
mutation($username : String!,$password : String!){
  register(username:$username,password:$password)
}

`;
const LOGIN_QUERY = gql`
  query($username : String!,$password : String!){
    login(username:$username,password:$password)
    {
      token
    }
  }

`;

module.exports = {
  REGISTER_QUERY,
  LOGIN_QUERY,
}
