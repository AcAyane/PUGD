import gql from 'graphql-tag';

const INSERT_Series = gql`
mutation(
  $Website: String,
  $Comment: String,
  $Url_thumbnail: String,
  $Linked_authorities: [AuthorityLinkInputType],
  $Name: String,
  $Issn: String,
  $Publisher: String,
  $Parent_series: String
){

InsertSubSeries(
  Website: $Website ,
  Comment: $Comment ,
  Url_thumbnail: $Url_thumbnail ,
  Linked_authorities: $Linked_authorities ,
  Name: $Name ,
  Issn: $Issn ,
  Publisher: $Publisher ,
  Parent_series: $Parent_series 
)
}
`;

const UPDATE_Series = gql`
mutation(
  $ID :String!,
  $Website: String,
  $Comment: String,
  $Url_thumbnail: String,
  $Linked_authorities: [AuthorityLinkInputType],
  $Name: String,
  $Issn: String,
  $Publisher: String,
  $Parent_series: String
){

UpdateSubSeries(
  _id:$ID,
  Website: $Website ,
  Comment: $Comment ,
  Url_thumbnail: $Url_thumbnail ,
  Linked_authorities: $Linked_authorities ,
  Name: $Name ,
  Issn: $Issn ,
  Publisher: $Publisher ,
  Parent_series: $Parent_series 
)
}
`;

const DELETE_Series = gql`
mutation(
  $ID :String!,
){

DeleteSubSeries(
  _id:$ID,
)
}
`;

module.exports = {
  INSERT_Series,
  UPDATE_Series,
  DELETE_Series
}
