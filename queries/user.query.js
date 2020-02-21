import gql from 'graphql-tag';

const USER_QUERY = gql`
query{
  getAllUsers{
    _id
    username
    password
    email
  }
}
`;

export default USER_QUERY;
