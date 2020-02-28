import gql from 'graphql-tag';

export const BOOKS_QUERY = gql`
  query {
    book(title: "haha") {
      title
      isbn
    }
  }
`;
