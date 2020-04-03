import gql from 'graphql-tag';

const GET_CATEGORY = gql`
query(
  $Id : String,
  $Name : String,
  $Scope_note : String,
  $Comment : String,
  $Authority_number : Int,
  $URL_thumbnail : String,
){
category(
  id:$Id
  Name:$Name,
  Scope_note:$Scope_note,
  Comment:$Comment,
  Authority_number:$Authority_number,
  URL_thumbnail:$URL_thumbnail)
  {
    
    _id
    authority_number
    broader_term
    comment
    linked_authorities
    name
    parent_category
    record
    scope_note
}
}
`;
const GET_CATEGORY_ALL_FIELDS = gql`
 
query(
  $all_fields : String!,
){
category_all_fields(
    all_fields:$all_fields
)
  {
    _id
    authority_number
    broader_term
    comment
    linked_authorities
    name
    parent_category
    record
    scope_note
}
}


`;


module.exports = {
  GET_CATEGORY,
  GET_CATEGORY_ALL_FIELDS

}
