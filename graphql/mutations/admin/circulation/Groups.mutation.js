import gql from "graphql-tag";

const ADD_GROUP = gql`
mutation(
        $name                                 :                 String!,
        $message                                    :                 String,
        $respo                                :                 String!,
        $members                                    :                 [String],
        $sendLetterRappelToResponsable              :                 Boolean
        $addResponsableToGroup                      :                 Boolean,
        $sendMailReservationToResponsable           :                 Boolean,
        $sendMailRappelToResponsable                :                 Boolean,
        $sendLetterReservationToResponsable         :                 Boolean,
        $imprimeNameGroupOneLetter                  :                 Boolean,
        $imprimeNameGroupOneLetterReservation       :                 Boolean,
    ){
    
        InsertOneGroup(
            name                                    :         $name,
            message                                 :         $message,
            responsable                             :         $respo,
            members                                 :         $members,
            sendLetterRappelToResponsable           :         $sendLetterRappelToResponsable
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