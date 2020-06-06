import gql from 'graphql-tag';

const INSERT_UNIFORM_TITLE = gql`
mutation(
$UniformTitle:UniformTitleInputType
){

  InsertUniformTitle(UniformTitle:$UniformTitle)
}
`;

const UPDATE_UNIFORM_TITLE = gql`
<<<<<<< HEAD
mutation($Id: String!,$UniformTitle:UniformTitleInputType ){
  UpdateUniformTitle(Id:$Id,UniformTitle:$UniformTitle)
=======
mutation(
  $Id :String!,
  $Name:String,
  $Subject_description:String,
  $Url_thumbnail:String,
  $Linked_authorities: [AuthorityLinkInputType],
){

UpdateClassNumber(
  _id:$Id,
  Name: $Name ,
  Url_thumbnail: $Url_thumbnail ,
  Subject_description: $Subject_description ,
  Linked_authorities: $Linked_authorities ,
)
>>>>>>> develop
}
`;

const DELETE_UNIFORM_TITLE = gql`
mutation(
  $ID :String!,
){

DeleteClassNumber(
  _id:$ID,
)
}
`;

module.exports = {
  INSERT_UNIFORM_TITLE,
  UPDATE_UNIFORM_TITLE,
  DELETE_UNIFORM_TITLE
}
