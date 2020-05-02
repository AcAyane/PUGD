import gql from 'graphql-tag';

const GET_GROUPS_BORREWORS = gql`
    {
        GetAllCategoriesBorrowers{
            _id
            namecategoriesbrrowers
        }
    }
`;

const GET_GROUPS_BY_NAME= gql`
    query($Name_CatBr : String){
        GetAllCategBorrowers(Name_CatBr:$Name_CatBr){
            _id
            namecategoriesbrrowers
        }
    }
`;

module.exports = {
    GET_GROUPS_BORREWORS,
    GET_GROUPS_BY_NAME
}
