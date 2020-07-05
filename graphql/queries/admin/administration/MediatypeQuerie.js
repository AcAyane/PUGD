import gql from 'graphql-tag';



const GET_ALL_MEDIATYPE = gql`
 
query{
    GetAllMediaTypes{
        _id
        media_types_name
  }
}
`;

module.exports = {
    GET_ALL_MEDIATYPE: GET_ALL_MEDIATYPE,
  
  }
