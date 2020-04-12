import gql from 'graphql-tag';

const GET_SUB_SERIES = gql`
query(
  $Name: String,
  $Website: String,
  $Comment: String,
  $Url_thumbnail: String, 
  $id: String,
  $Issn: String,
  $Publisher: String,
  $Parent_series: String,
  $Linked_authorities: [String],
  ){
    sub_series(
    Name: $Name,
    Website: $Website,
    Comment: $Comment,
    Url_thumbnail: $Url_thumbnail,
    Id: $id,
    Issn: $Issn,
    Publisher: $Publisher,
    Parent_series: $Parent_series,
    Linked_authorities: $Linked_authorities,
  )
    {
      _id
      comment
      issn
      linked_authorities
      name
      parent_series
      publisher
      url_thumbnail
      website
  }
  }
`;
const GET_SUB_SERIES_ALL_FIELDS = gql`
 
query(
  $all_fields : String!,
){
  sub_series_all_fields(
  all_fields:$all_fields
)
  {
    _id
    comment
    issn
    linked_authorities
    name
    parent_series
    publisher
    url_thumbnail
    website
}
}

`;


module.exports = {
  GET_SUB_SERIES,
  GET_SUB_SERIES_ALL_FIELDS

}
