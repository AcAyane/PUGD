import gql from "graphql-tag";

const ADD_RESPONSIBILITY = gql`
mutation(
        $Name :         String,
        $Adresse :         String,
    ){
        InsertResponsibility(
            Name :         $Name,
            Adresse :      $Adresse,             
        )
    }
`;
const UPDATE_RESPONSIBILITY = gql`
mutation(
    $Id :           String!,
    $Name :         String,
    $Adresse :      String,
  ){
  UpdateResponsibility(
    Id   :         $Id,
    Name :         $Name,
    Adresse :      $Adresse,
  )
}
`;

const DELETE_RESPONSIBILITY = gql`
mutation($Id:String!){
  DeleteResponsibility(_id:$Id)
}
`;


module.exports = {
    ADD_RESPONSIBILITY : ADD_RESPONSIBILITY,
    UPDATE_RESPONSIBILITY : UPDATE_RESPONSIBILITY,
    DELETE_RESPONSIBILITY : DELETE_RESPONSIBILITY,
}