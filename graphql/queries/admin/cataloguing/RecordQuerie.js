import gql from 'graphql-tag';

const GET_RECORD = gql`
query($Id : String){
  record(Id : $Id){
    ISBN
    Title
    OtherTitle
    ParallelTitle
    RecYear
    EditionStatement
    OtherInformations
    Format
    Summary
    IsNew
    IsNum
    AccMaterial
    NoteAuthor
    NbPages
    FkSeries{
      _id
    }
    FkSubSeries{
      _id
    }
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
    CollectionTitle
  }
}
`;
const GET_RECORD_ALL_FIELDS = gql`
 
query($ISBN : String){
  records(ISBN : $ISBN){
    _id
    ISBN
    Title
    OtherTitle
    ParallelTitle
    RecYear
    EditionStatement
    OtherInformations
    Format
    Summary
    IsNew
    IsNum
    AccMaterial
    NoteAuthor
    NbPages
    FkSeries{
      _id
    }
    FkSubSeries{
      _id
    }
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
    CollectionTitle
  }
}
`;
module.exports = {
  GET_RECORD: GET_RECORD,
  GET_RECORD_ALL_FIELDS: GET_RECORD_ALL_FIELDS,
}