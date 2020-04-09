import gql from 'graphql-tag';

const INSERT_AUTHOR = gql`
mutation(
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
  $Linked_authorities : [AuthorityLinkInputType], 
){
  InsertAuthor(
    Author_Type:$Author_Type,
    Name_Auth:$Name_Auth,
    IndexName_Auth:$IndexName_Auth,
    Year_Auth:$Year_Auth,
    City_Auth:$City_Auth,
    Note_Auth:$Note_Auth,
    Country_Auth:$Country_Auth,
    WebSite_Auth:$WebSite_Auth,
    ISNI_Auth:$ISNI_Auth,
    Subdivision_Auth:$Subdivision_Auth,
    UrlThumbnail_Auth:$UrlThumbnail_Auth
    Linked_authorities:$Linked_authorities
  )
}

`;


module.exports = {
  INSERT_AUTHOR,
}
