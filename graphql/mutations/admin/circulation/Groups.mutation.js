import gql from "graphql-tag";

const ADD_GROUP = gql`
mutation(
        $nameGroup                                  :                 String,
        $message                                    :                 String,
        $responsable                                :                 String,
        $members                                    :                 [String],
        $addResponsableToGroup                      :                 Boolean,
        $sendMailReservationToResponsable           :                 Boolean,
        $sendMailRappelToResponsable                :                 Boolean,
        $sendLetterReservationToResponsable         :                 Boolean,
        $imprimeNameGroupOneLetter                  :                 Boolean,
        $imprimeNameGroupOneLetterReservation       :                 Boolean,
    ){
    
        InsertOneGroup(
            name                                    :         $nameGroup,
            message                                 :         $message,
            responsable                             :         $responsable,
            members                                 :         $members,
            addResponsableToGroup                   :         $addResponsableToGroup,
            sendMailReservationToResponsable        :         $sendMailReservationToResponsable,
            sendMailRappelToResponsable             :         $sendMailRappelToResponsable,           
            sendLetterReservationToResponsable      :         $sendLetterReservationToResponsable,           
            imprimeNameGroupOneLetter               :         $imprimeNameGroupOneLetter,           
            imprimeNameGroupOneLetterReservation    :         $imprimeNameGroupOneLetterReservation,           
        )
    }
`;


module.exports = {
    ADD_GROUP,
}