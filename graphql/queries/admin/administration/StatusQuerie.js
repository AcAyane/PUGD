import gql from 'graphql-tag';



const GET_ALL_STATUS = gql`
 
query{
    GetAllStatus{
        _id
        status_name
  }
}
`;

module.exports = {
    GET_ALL_STATUS: GET_ALL_STATUS,
  
  }
