import gql from 'graphql-tag';

const USER_QUERY = gql`
query {
  book(id: "5e52e66ec129b41b04eafcff"){
   id
    isbn
    title
  }
}
`;

export default USER_QUERY;
