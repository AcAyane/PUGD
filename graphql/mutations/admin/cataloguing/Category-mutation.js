import gql from 'graphql-tag';

const INSERT_CATEGORY = gql`
mutation(
  $_id :     Int, 
  $Name :    String,
){
  InsertCategory(
    _id :      $_id,
    Name :     $Name,
  )
}
`;

const UPDATE_CATEGORY = gql`
mutation(
  $Id :            String!,
  $Name :    String,
  ){
  UpdateCategory(
    Id : $Id,
    Name :     $Name,
  )
}
`;

const DELETE_CATEGORY = gql`
mutation($Id:String!){
  DeleteCategory(_id:$Id)
}
`;
module.exports = {
  INSERT_CATEGORY : INSERT_CATEGORY,
  UPDATE_CATEGORY : UPDATE_CATEGORY,
  DELETE_CATEGORY : DELETE_CATEGORY,
}