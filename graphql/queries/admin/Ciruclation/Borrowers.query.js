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
       GetBorrowersByName(fullname : $fullname){
         _id,
            fullname,
            email,
            gender
      
        }
    }
`;
module.exports = {
    ALL_BORROWERS,
    BorrowersByName
}
