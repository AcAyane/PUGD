import gql from 'graphql-tag';

const INSERT_SERIES = gql`
mutation(
  $Title: String,
  $Issn: String,
  $Publisher: String,
  $Website: String,
  $Comment: String,
  $Url_thumbnail: String,
  $Linked_authorities: [AuthorityLinkInputType]
){

InsertSeries(
  Title:$Title ,
  Issn:$Issn ,
  Publisher:$Publisher ,
  Website:$Website ,
  Comment:$Comment ,
  Url_thumbnail:$Url_thumbnail ,
  Linked_authorities:$Linked_authorities 
)
}

`;

const UPDATE_SERIES = gql`
mutation(
  $ID :String!,
  $Title: String,
  $Issn: String,
  $Publisher: String,
  $Website: String,
  $Comment: String,
  $Url_thumbnail: String,
  $Linked_authorities: [AuthorityLinkInputType]
){

UpdateSeries(
  _id:$ID,
  Title:$Title ,
  Issn:$Issn ,
  Publisher:$Publisher ,
  Website:$Website ,
  Comment:$Comment ,
  Url_thumbnail:$Url_thumbnail ,
  Linked_authorities:$Linked_authorities
)
}
`;

const DELETE_SERIES = gql`
mutation(
  $ID :String!,
){

DeleteSeries(
  _id:$ID,
)
}
`;

module.exports = {
  INSERT_SERIES,
  UPDATE_SERIES,
  DELETE_SERIES
}
