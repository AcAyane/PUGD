import gql from 'graphql-tag';

const GET_CLASS_NUMBER = gql`
query(
    $id: String,
    $Title: String,
    $Url_thumbnail: String,
    $Linked_authorities: [String] ,
  ){
  collection_title(  
    id:$id,
    Title:$Title,
    Url_thumbnail:$Url_thumbnail,
    Linked_authorities:$Linked_authorities)
    {
        _id
        linked_authorities
        title
        url_thumbnail
    }
}
`;


module.exports = {
  GET_CLASS_NUMBER

}
