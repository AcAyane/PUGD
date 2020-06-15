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
const GetBorrower = gql`
    query ($id: String!){
     getOneBorrower(id:$id){
         _id,
         bar_code,
         first_name,
         last_name,
         email,
         phonenumber,
         birthday,
         gender,
         statues,
         username_opac,
         password_opac,
         lang_opac,
         membershipstart,
         membershipcanceled,
         address{
            rue1,
            rue2,
            city,
            contry,
            } 
          
      }
    }
`;
const AllBorrowers = gql`
    query($full_name: String){
       getAllBorrowers(full_name : $full_name){
     _id, 
     last_name,
    first_name,
    bar_code,
    email
   
}
    }
`;
module.exports = {
    ALL_BORROWERS,
    AllBorrowers,
    GetBorrower,
};
