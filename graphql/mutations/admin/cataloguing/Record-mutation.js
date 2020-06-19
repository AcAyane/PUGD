import gql from 'graphql-tag';

const INSERT_RECORD = gql`
    mutation(
        $isbn :             String,
        $title:             String,
        $OtherTitle:        String,
        $ParallelTitle:     String,
        $RecYear:           Int,
        $Price:             Int,
        $Type:              String,
        $EditionStatement:  String,
        $OtherInformations: String,
        $Format:            String,
        $Summary:           String,
        $IsNew :            Boolean,
        $IsNum :            Boolean,
        $AccMaterial :      String,
        $NoteAuthor :       String,
        $NbPages :          Int,
        $FkSeries :         String,
        $FkSubSeries :      String,
        $Language :         [String],
        $OriginalLanguage : [String],
        $KeyWords :         [String],
        $Branches :         [String],
        $Publishers :       String,
        $OtherPublishers:   String,
        $AuthorityLink :    [String], 
        $CollectionTitle :  [String],
        $Category :         [String],
        $ClassNumber:       [String],
    ){
        insertOneRecord(
            isbn :              $isbn,
            title:              $title,
            OtherTitle :        $OtherTitle,
            ParallelTitle :     $ParallelTitle,
            RecYear:            $RecYear,
            EditionStatement :  $EditionStatement,
            OtherInformations : $OtherInformations,
            Format :            $Format,
            Price:              $Price,
            Type:               $Type,
            Summary :           $Summary,
            IsNew :             $IsNew,
            IsNum :             $IsNum,
            AccMaterial :       $AccMaterial,
            NoteAuthor :        $NoteAuthor,
            NbPages :           $NbPages,
            FkSeries :          $FkSeries,
            FkSubSeries :       $FkSubSeries,
            Language :          $Language,
            OriginalLanguage :  $OriginalLanguage,
            KeyWords :          $KeyWords,
            Branches :          $Branches, 
            Publisher :         $Publishers,
            OtherPublisher :    $OtherPublishers
            AuthorityLink :     $AuthorityLink,
            CollectionTitle :   $CollectionTitle, 
            Category :          $Category, 
            ClassNumber :       $ClassNumber,
            
        )
    }
`;


const UPDATE_RECORD = gql`
    mutation(
        $isbn : String,
        $title: String,
        $OtherTitle:        String,
        $ParallelTitle:     String,
        $RecYear:           Int,
        $Price:             Int,
        $Type:              String,
        $EditionStatement:  String,
        $OtherInformations: String,
        $Format:            String,
        $Summary:           String,
        $IsNew :            Boolean,
        $IsNum :            Boolean,
        $AccMaterial :      String,
        $NoteAuthor :       String,
        $NbPages :          Int,
        $FkSeries :         String,
        $FkSubSeries :      String,
        $Language :         [String],
        $OriginalLanguage : [String],
        $KeyWords :         [String],
        $Branches :         [String],
        $Publishers :       String,
        $OtherPublishers:   String,
        $AuthorityLink :    [String], 
        $CollectionTitle :  [String],
        $Category :         [String],
        $ClassNumber:       [String],
    ){
        UpdateOneRecord(
            isbn :              $isbn,
            title:              $title,
            OtherTitle :        $OtherTitle,
            ParallelTitle :     $ParallelTitle,
            RecYear:            $RecYear,
            Price:              $Price,
            Type:               $Type,
            EditionStatement :  $EditionStatement,
            OtherInformations : $OtherInformations,
            Format :            $Format,
            Summary :           $Summary,
            IsNew :             $IsNew,
            IsNum :             $IsNum,
            AccMaterial :       $AccMaterial,
            NoteAuthor :        $NoteAuthor,
            NbPages :           $NbPages,
            FkSeries :          $FkSeries,
            FkSubSeries :       $FkSubSeries,
            Language :          $Language,
            OriginalLanguage :  $OriginalLanguage,
            KeyWords :          $KeyWords,
            Branches :          $Branches,
            Publisher :         $Publishers,
            OtherPublisher :    $OtherPublishers
            AuthorityLink :     $AuthorityLink,
            CollectionTitle :   $CollectionTitle, 
            Category :          $Category, 
            ClassNumber :       $ClassNumber,
        )
    }
`;

const DELETE_RECORD = gql`
mutation($Id:String!){
    DeleteOneRecord(_id:$Id)
}
`;

module.exports = {
    INSERT_RECORD: INSERT_RECORD,
    UPDATE_RECORD: UPDATE_RECORD,
    DELETE_RECORD: DELETE_RECORD,
}