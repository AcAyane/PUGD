import gql from 'graphql-tag';

const ADD_BOOK_MUTATION = gql`
mutation($isbn : String!,$title : String!){
  insertOneBook(isbn:$isbn, title:$title )
  }
  
`;
const DELETE_BOOK_MUTATION = gql`
mutation($id : String!){
  deleteOneBook(_id:$id )
  }
  
`;
module.exports ={
  ADD_BOOK_MUTATION,
  DELETE_BOOK_MUTATION
}
// export default ;
