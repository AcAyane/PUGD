import gql from 'graphql-tag';

const GET_CATEGORY = gql`
query(
    $_id :     Int, 
    $Name :    String,   
  
){
    Category(
    _id :      $_id,
    Name :     $Name,
  ){
    _id
    Name
  }
}
`;
const GET_CATEGORY_ALL_FIELDS = gql`
 
query($all_fields: String!){
    Category_all_fields(all_fields:$all_fields){
        _id
        Name
  }
}
`;


module.exports = {
  GET_CATEGORY: GET_CATEGORY,
  GET_CATEGORY_ALL_FIELDS: GET_CATEGORYALL_FIELDS, 

}