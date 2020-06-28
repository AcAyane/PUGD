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
       getAllBorrowers(filter: $full_name){
             _id
            first_name,
            last_name,
            bar_code
            birthday,
            phonenumber,
            email,
            gender,
       }
    }
`;

const BORROWER_WITH_PRET_AND_RSV = gql`
    query($id: String!){
       GetBorrowerWithPretAndReservation(id: $id){
           Borrower{
               _id,
               first_name,
               last_name,
               bar_code,
           },
           All_Reservation{
              date_init,
              
              copy{
                _id
                BareCode
                Record{
                    Title
                }
              },
              rank,
           },
           All_Pret{
              date_init,
              date_retour,
              date_prolongement,
              copy{
                  _id,
                  BareCode,
                  Cote,
                  Record{
                   Title
                  },
                  Localisation{
                    Name
                  },
                  Section{
                    section_name
                  },
                  MediaType{
                     media_types_name
                  },
              },
           }
            __typename,
       }
    }
`;

module.exports = {
    ALL_BORROWERS,
    AllBorrowers,
    GetBorrower,
    BORROWER_WITH_PRET_AND_RSV,
};
