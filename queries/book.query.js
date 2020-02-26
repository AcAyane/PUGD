import gql from 'graphql-tag';

const BOOK_QUERY = gql`
query{
  books{
    _id
    isbn
    title
  }}
  
  
`;

export default BOOK_QUERY;
