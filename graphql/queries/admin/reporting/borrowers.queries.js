import gql from 'graphql-tag';

const ALL_BORROWERS = gql`
    query{
        getAllBorrowers{
            _id,
            first_name,
            last_name,
        }
    }
`;
const BorrowersByName = gql`
    query($last: String!){
       GetBorrowersByName(last : $lastname){
         _id,
            firstname,
            email,
            gender
      
        }
    }
`;
module.exports = {
    ALL_BORROWERS,
    BorrowersByName
}
