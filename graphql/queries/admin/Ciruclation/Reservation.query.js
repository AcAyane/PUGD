import gql from 'graphql-tag';

const GET_ALL_RESERVATIONS = gql`
    query{
        GetAllReservation{
            Borrwore{
              _id,
              fullname,
            },
        
            Record{
              _id,
              Title,
            }
            Rank,
            dateres,
            confirmed,
          }
    }
`;

const GET_RESERVATIONS_BY_NAME= gql`
    query($Name_CatBr : String){
        GetAllCategBorrowers(Name_CatBr:$Name_CatBr){
            _id
            namecategoriesbrrowers
        }
    }
`;

module.exports = {
    GET_ALL_RESERVATIONS,
    GET_RESERVATIONS_BY_NAME
}