import gql from 'graphql-tag';

const GetAllCategoriesBorrowers = gql`
    query{
        allcatbr{
            _id
            dureeadhesion
            agemin
            agemax
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
    GetAllCategoriesBorrowers,
    GET_GROUPS_BY_NAME
}
