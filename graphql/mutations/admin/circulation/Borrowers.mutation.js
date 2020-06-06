import gql from 'graphql-tag';

const INSERT_BRROWERS = gql`
    mutation(
        $FullName :                 String,
        $Address:                   String,
        $PhoneNumber:               String,
        $BirthDay:                  String,
        $Email:                     String,
        $Gender:                    String,
        $Statues:                   String,
        $OpacLogin:                 String,
        $MembershipStart:           String,
        $MembershipCanceled :       String,
        $Barcode :                  String,
    ){

        InsertOneBorrower(
            FullName :          $FullName,
            Address :           $Address,
            PhoneNumber:        $PhoneNumber,
            BirthDay:           $BirthDay,
            Email:              $Email,
            Gender:             $Gender,
            Statues:            $Statues,
            OpacLogin:          $OpacLogin,
            MembershipStart:    $MembershipStart,
            MembershipCanceled: $MembershipCanceled,
            Barcode:            $Barcode,
        )
    }

`;


const UPDATE_BRROWERS = gql`
    mutation(
        $FullName :                 String,
        $Address:                   String,
        $PhoneNumber:               String,
        $BirthDay:                  String,
        $Email:                     String,
        $Gender:                    String,
        $Statues:                   String,
        $OpacLogin:                 String,
        $MembershipStart:           String,
        $MembershipCanceled :       String,
        $Barcode :                  String,
    ){

        UpdateOneBrrower(
            FullName :          $FullName,
            Address :           $Address,
            PhoneNumber:        $PhoneNumber,
            BirthDay:           $BirthDay,
            Email:              $Email,
            Gender:             $Gender,
            Statues:            $Statues,
            OpacLogin:          $OpacLogin,
            MembershipStart:    $MembershipStart,
            MembershipCanceled: $MembershipCanceled,
            Barcode:            $Barcode,
        )
    }

`;

module.exports = {
    INSERT_BRROWERS,
    UPDATE_BRROWERS,
}
