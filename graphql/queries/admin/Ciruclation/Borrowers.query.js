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
                  first_name,
                  last_name,
                  bar_code,
                  address{
                    rue1,
                    rue2
                    city,
                    contry
                  },
                  birthday,
                  phonenumber,
                  categories{
                    namecategoriesbrrowers
                  }
                },
                All_Reservation{
                  date_init
                  Copy{
                    BareCode
                    Record{
                      Title
                    }
                  },
                  rank
                },
                
                All_Pret{
                  date_init
                  Date_Retour
                  Copy{
                    BareCode,
                    Cote,
                    Record{
                      Title,
                    },
                    Localisation{
                      Name,
                    },
                    Section{
                      section_name
                    }
                    MediaType{
                      media_types_name
                    }
                  },
                }
                __typename
              }
    }
`;

module.exports = {
    ALL_BORROWERS,
    AllBorrowers,
    GetBorrower,
    BORROWER_WITH_PRET_AND_RSV,
};
