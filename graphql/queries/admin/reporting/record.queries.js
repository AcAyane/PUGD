import gql from 'graphql-tag';

const GET_RECORD_YEAR  = gql`
query(
  $RecYear : int,
  $Author :String,
      
  
  
){ GetRecordYear(RecYear:$RecYear,Outher:$Outher)
  {
    _id
    Title
    isbn
    OtherTitle
    ParallelTitle
    RecYear
    EditionStatement
    OtherInformation
    Format
    Summary
    IsNew
    IsNum
    AccMaterial
    NoteAuthor
    NbPages
    FKSeries
    FKSubSeries
    Baskets
    KeyWords
    Category
    Branches         
	Copy             
	Serial          
	Responsibilities 
	Publishers       
	Author string 
  }
}
  
  `;
const GET_RECORD = gql`
query(
  $RecYear : int,
  $Outher :String,
  $Original_language :String,
  $Category :String,
  $Author : String,
  $NbPage : int,
  
  
){
GetRecord(RecYear:$RecYear,Author:$Author,Original_language:$Original_language,Category:$Category,NbPages:$$NbPage)
  {
    _id
    Title
    isbn
    OtherTitle
    ParallelTitle
    RecYear
    EditionStatement
    OtherInformation
    Format
    Summary
    IsNew
    IsNum
    AccMaterial
    NoteAuthor
    NbPages
    FKSeries
    FKSubSeries
    Baskets
    KeyWords
    Category
    Branches         
	Copy             
	Serial          
	Responsibilities 
	Publishers       
	Author 
  }
}
  
  `;

module.exports = {
    GET_RECORD_YEAR,
    GET_RECORD,

}
