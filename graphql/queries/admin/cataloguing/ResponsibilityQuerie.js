import gql from 'graphql-tag';

const GET_RESPONSIBILITY = gql`
query(
  $Id : String,
  $Name :         String,
  $Adresse :         String,  
  $All_Fields :    String,   
  
){
  Responsibility(
    id:$Id,
    Name :         $Name,
    Adresse :      $Adresse,             
    all_fields:     $All_Fields,
  ){
    _id
    Name
    Adresse 
  }
}
`;
const GET_RESPONSIBILITY_ALL_FIELDS = gql`
 
query($all_fields: String!){
  Responsibility_all_fields(all_fields:$all_fields){
    _id
    Name
    Adresse 
  }
}
`;


module.exports = {
  GET_RESPONSIBILITY: GET_RESPONSIBILITY,
  GET_RESPONSIBILITY_ALL_FIELDS: GET_RESPONSIBILITY_ALL_FIELDS, 

}