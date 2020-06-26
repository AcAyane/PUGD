import gql from 'graphql-tag';

const GET_FUNCTION = gql`
query($id : String!){
    function(id : $id){
    _id
    Value
    Number
  }
}
`;
const GET_FUNCTION_ALL_FIELDS = gql`
 
query($Value : String){
  functions(Value : $Value){
    _id
    Value
    Number
  }
}
`;


module.exports = {
    GET_FUNCTION: GET_FUNCTION,
    GET_FUNCTION_ALL_FIELDS: GET_FUNCTION_ALL_FIELDS, 

}