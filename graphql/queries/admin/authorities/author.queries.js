import gql from 'graphql-tag';

const GET_AUTHOR = gql`
query(
  $Id : String,
  $Author_Type : Int,
  $Name_Auth : String,
  $IndexName_Auth : String,
  $Year_Auth : String,
  $City_Auth : String,
  $Note_Auth : String,
  $Country_Auth : String,
  $WebSite_Auth : String,
  $ISNI_Auth : String,
  $Subdivision_Auth : String,
  $UrlThumbnail_Auth : String,   
){
  author(
    id:$Id,
    author_type:$Author_Type,
    name_auth:$Name_Auth,
    indexname_auth:$IndexName_Auth,
    year_auth:$Year_Auth,
    city_auth:$City_Auth,
    note_auth:$Note_Auth,
    country_auth:$Country_Auth,
    website_auth:$WebSite_Auth,
    isni_auth:$ISNI_Auth,
    subdivision_auth:$Subdivision_Auth,
    urlthumbnail_auth:$UrlThumbnail_Auth,
  ){
    _id
    author_type
    city_auth
    country_auth
    indexName_auth
    isni_auth
    name_auth
    note_auth
    subdivision_auth
    url_thumbnail_auth
    website_auth
    year_auth
  }
}
`;
const GET_AUTHOR_ALL_FIELDS = gql`
 
query($all_fields: String!){
  author_all_fields(all_fields:$all_fields){
    _id
    author_type
    city_auth
    country_auth
    indexName_auth
    isni_auth
    name_auth
    note_auth
    subdivision_auth
    url_thumbnail_auth
    website_auth
    year_auth
  }
}


`;


module.exports = {
  GET_AUTHOR,
GET_AUTHOR_ALL_FIELDS  

}
