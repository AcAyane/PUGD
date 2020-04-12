import gql from 'graphql-tag';

const INSERT_CLASS_NUMBER = gql`
mutation(
  $Name:String,
  $Subject_description:String,
  $Url_thumbnail:String,
  $Linked_authorities: [AuthorityLinkInputType],
){

  InsertClassNumber(
  Name: $Name ,
  Url_thumbnail: $Url_thumbnail ,
  Subject_description: $Subject_description ,
  Linked_authorities: $Linked_authorities ,
 
)
}
`;

const UPDATE_CLASS_NUMBER = gql`
mutation(
  $ID :String!,
  $Name:String,
  $Subject_description:String,
  $Url_thumbnail:String,
  $Linked_authorities: [AuthorityLinkInputType],
){

UpdateClassNumber(
  _id:$ID,
  Name: $Name ,
  Url_thumbnail: $Url_thumbnail ,
  Subject_description: $Subject_description ,
  Linked_authorities: $Linked_authorities ,
)
}
`;

const DELETE_CLASS_NUMBER = gql`
mutation(
  $ID :String!,
){

DeleteClassNumber(
  _id:$ID,
)
}
`;

module.exports = {
  INSERT_CLASS_NUMBER,
  UPDATE_CLASS_NUMBER,
  DELETE_CLASS_NUMBER
}
