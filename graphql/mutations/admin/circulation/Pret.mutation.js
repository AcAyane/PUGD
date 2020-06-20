import gql from 'graphql-tag';

const INSERT_ONE_PRET = gql`
    mutation(
        $idCopy :                 String,
        $idBorrower:                   String,
    ){

        InsertOnePret(
            idCopy  :          $idCopy,
            idBorrower :           $idBorrower,
        
        )
    }

`;


const UPDATE_PRET = gql`
    mutation(
         $idCopy :                 String,
        $idBorrower:               String,
    ){

        UpdateOnePret(
             idCopy  :          $idCopy,
            idBorrower :        $idBorrower,
        )
    }

`;


const DELETE_PRET = gql`
  mutation($_id: String!) {
     DeleteOnePret(_id: $_id)
  }
`;

module.exports = {
    INSERT_ONE_PRET,
    DELETE_PRET,
    UPDATE_PRET
}
