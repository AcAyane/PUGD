import gql from "graphql-tag";

const ADD_UNIFORMTITLE = gql`
mutation(
        $Title :          String,
        $Records :        String,

    ){
      InsertOneUniformTitle(
            Title :          $Title,
            Records :        $Records,             
        )
    }
`;

const UPDATE_UNIFORMTITLE = gql`
mutation(
    $Id :           String!,
    $Title :          String,
    $Records :        String,
  ){
    UpdateOneUniformTitle(
    Id   :         $Id,
    Title :          $Title,
    Records :        $Records, 
  )
}
`;
const DELETE_UNIFORMTITLE = gql`
mutation($Id:String!){
  DeleteOneUniformTitle(_id:$Id)
}
`;


module.exports = {
    ADD_UNIFORMTITLE: ADD_UNIFORMTITLE,
    UPDATE_UNIFORMTITLE : UPDATE_UNIFORMTITLE,
    DELETE_UNIFORMTITLE : DELETE_UNIFORMTITLE,
}