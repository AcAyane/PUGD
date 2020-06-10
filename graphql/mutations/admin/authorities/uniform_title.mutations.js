import gql from 'graphql-tag';

const INSERT_UNIFORM_TITLE = gql`
mutation(
$UniformTitle:UniformTitleInputType
){

  InsertUniformTitle(UniformTitle:$UniformTitle)
}
`;

const UPDATE_UNIFORM_TITLE = gql`
mutation($Id: String!,$UniformTitle:UniformTitleInputType ){
  UpdateUniformTitle(Id:$Id,UniformTitle:$UniformTitle)
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
