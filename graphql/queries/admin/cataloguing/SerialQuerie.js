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
    Language{
      _id
    } 
    OriginalLanguage {
      _id
    }
    KeyWords{
      _id
    } 
    Branches{
      _id
    } 
    Publishers {
      _id
    }
    OtherPublishers{
      _id
    }
    Category{
      _id
    } 
    ClassNumber{
      _id
    }  
    
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
    Language{
      _id
    } 
    OriginalLanguage{
      _id
    } 
    KeyWords{
      _id
    } 
    Branches{
      _id
    } 
    Publishers{
      _id
    } 
    OtherPublishers{
      _id
    }
    Category{
      _id
    } 
    ClassNumber{
      _id
    } 
  }
}
`;


module.exports = {
  GET_SERIAL: GET_SERIAL,
  GET_SERIAL_ALL_FIELDS: GET_SERIAL_ALL_FIELDS, 

}