import gql from 'graphql-tag';

const Brrowers_MUTATION = gql`
    mutation(
        $FirstName : String!,
        $LastName : String!,
        $Address : String!,
        $Phone : String!,
        $YearOfBirth : String!,
        $Gender : String!,
    ){
        register_Brrowers(
            FirstName:$FirstName,
            LastName:$LastName,
            Address:$Address,
            Phone:$Phone,
            YearOfBirth:$YearOfBirth,
            Gender:$Gender
        )
    }

`;
module.exports = {
    Brrowers_MUTATION,
}
