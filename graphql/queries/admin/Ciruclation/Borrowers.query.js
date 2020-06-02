import gql from 'graphql-tag';

const ALL_BORROWERS = gql`
    query{
     GetAllBro{
            _id,
            fullname,
            gender,
            email,
            address,
            birthday
            
          
        }
    }
`;
const BorrowersByName = gql`
    query($name: String!){
        GetBorrowersByName(name : $name,){
         _id,
            fullname,
            gender,
            email,
            address,
            birthday
      
        }
    }
`;
module.exports = {
    ALL_BORROWERS,
    BorrowersByName
}
