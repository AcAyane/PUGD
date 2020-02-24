import gql from 'graphql-tag';

const USER_QUERY = gql`
query {
  book(id: "5e52e33077cd942d42c417cb"){
   id
    isbn
    title
  }
}
`;

export default USER_QUERY;
