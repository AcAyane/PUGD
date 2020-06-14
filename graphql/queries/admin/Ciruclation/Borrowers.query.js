import gql from 'graphql-tag';

const ALL_BORROWERS = gql`
    query{
     getAllBorrowers{
            _id,
            last_name,
            first_name,
        }
    }
`;
const BorrowersByName = gql`
    query($fullname: String!){
       GetBorrowersByName(first_name : $fullname){
         _id,
            first_name,
            last_name,
            email,
            gender
      
        }
    }
`;
const CHECK_CODE_BAR = gql`
    query($code: String){
        getAllBorrowers(bar_code : $code){
            bar_code
        }
    }
`;
module.exports = {
    ALL_BORROWERS,
    BorrowersByName,
    CHECK_CODE_BAR
}
