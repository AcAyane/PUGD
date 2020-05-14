import gql from 'graphql-tag';

const GetAllBro = gql`
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
    GetAllBro,
    BorrowersByName
}
