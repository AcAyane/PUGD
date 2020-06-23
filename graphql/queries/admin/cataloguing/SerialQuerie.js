import gql from 'graphql-tag';

const GET_SERIAL = gql`
query($Id : String!){
  serial( id:$Id ){
    _id
    ISSN 
    TitleProper
    OtherTitleInfo
    ParallelTitle
    RecYear
    Type
    Summary
    VisibleInSerial 
    ViewSerialCheckIn 
    NoteOnContents 
    GenetalNote 
    Language 
    OriginalLanguage 
    KeyWords 
    Branches 
    Publishers 
    OtherPublishers
    AuthorityLink
    Category 
    ClassNumber  
    
  }
}
`;

const GET_SERIAL_ALL_FIELDS = gql`
 
query($ISSN: String){
  serials(ISSN:$ISSN){
    _id
    ISSN 
    TitleProper
    OtherTitleInfo
    ParallelTitle
    RecYear
    Type
    Summary
    VisibleInSerial 
    ViewSerialCheckIn 
    NoteOnContents 
    GenetalNote 
    Language 
    OriginalLanguage 
    KeyWords 
    Branches 
    Publishers 
    OtherPublishers
    AuthorityLink
    Category 
    ClassNumber 
  }
}
`;


module.exports = {
  GET_SERIAL: GET_SERIAL,
  GET_SERIAL_ALL_FIELDS: GET_SERIAL_ALL_FIELDS, 

}