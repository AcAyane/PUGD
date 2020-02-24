import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
  {
  book(id: "5e52e66ec129b41b04eafcff") {
    id
    title
    isbn
  }
}

`;

export default BOOKS_QUERY;