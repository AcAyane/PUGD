import gql from "graphql-tag";

export const BOOKS_SAVE = gql`
  mutation M($isbn: String!, $title: String!) {
    createBook(isbn: $isbn, title: $title) {
      title
      isbn
    }
  }
`;

export const BOOKS_DELETE = gql`
  mutation M($isbn: String!) {
    deleteOneBook(isbn: $isbn) {
      title
      isbn
    }
  }
`;
