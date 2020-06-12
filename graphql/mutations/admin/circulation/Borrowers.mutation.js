import gql from 'graphql-tag';

const INSERT_BORROWERS = gql`
    mutation(
        $barcode :                 String,
        $first_name:                   String,
        $last_name:               String,
        $birth_day:                  DateTime,
        $gender:                     String,
        $phone_number:                    String,
        $email:                   String,
        $statues:                   String,
        $ru1:                 String,
        $ru2:           String,
        $vill :       String,
        $contr :                  String,
        $username_opac :                  String,
        $password_opac :                  String,
        $lang_opac :                  String,
        $message :                  String,
        $comment :                  String,
        $member_ship_start :                  DateTime,
        $communes :                  String,
        $idCatBr :                  String,
        $groupsBr :                  [String],
    ){

        InsertOneBorrower(
            bar_code :          $barcode,
            first_name :           $first_name,
            last_name:        $last_name,
            birth_day:             $birth_day,
            gender:           $gender,
            phone_number:              $phone_number,
            email:            $email,
            statues:          $statues,
          
            ru1:            $ru1,
            ru2:            $ru2,
            city:            $vill,
            contry:            $contr,
           
           
            username_opac:    $username_opac,
            password_opac:    $password_opac,
            lang_opac:    $lang_opac,
            
            message: $message,
            comment: $comment,
            
            member_ship_start:            $member_ship_start,
            
            communes:            $communes,
            IdCatBr:            $idCatBr,
            GroupsBr:            $groupsBr,
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
    INSERT_BORROWERS,
    UPDATE_BRROWERS,
}
