import gql from 'graphql-tag';

const GET_UNIFORMTITLE = gql`
query($Id : String){
  UniformTitle(id:$Id){
    _id
    Title
    Records
  }
}
`;
const GET_UNIFORMTITLE_ALL_FIELDS = gql`
 
query($Title: String!){
  UniformTitles(Title:$Title){
    _id
    Title
    Records
  }
}
`;

module.exports = {
  GET_UNIFORMTITLE: GET_UNIFORMTITLE,
  GET_UNIFORMTITLE_ALL_FIELDS: GET_UNIFORMTITLE_ALL_FIELDS, 

}
