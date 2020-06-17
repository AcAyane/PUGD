import gql from 'graphql-tag';

const GetOneCopy = gql`
   query($id: String!){
copy(id:$id){
_id
BareCode
  Owner{
    owner_name
  }
  CopyNumber
  Localisation{
    Address
    Name
  }
  
  MediaType{
    media_types_name
  }
  Section{
    section_name
  }
  Record{
    ISBN
    Title
    OtherTitle
    NbPages
    
  }
  DateLastSeen
  DateLastBorrowed
  
}
}
`;
const GetOneCopyByCode = gql`
   
     query ($code_bar: Int!){
     GetExamplaireByCodeBar(code_bar:$code_bar){
  _id
  BareCode
  CopyNumber
  Localisation
  NoteForLoan
  Price
  Record{
    Category
    Format
    ISBN
    _id
    Title
    Summary
    RecYear
    Publishers
    ParallelTitle
    OtherInformations
    OriginalLanguage
    NoteAuthor
    IsNum
    Baskets
    AccMaterial
    AuthorityLink
    FkSeries
    CollectionTitle
  }
  ReplacementPrice
  Reserves
  Restricted
  Stack
  WithDrawn
}
    }
`;
const GetAllCopies = gql`
    query{
    copies{
  _id
  BareCode
  CopyNumber
  Localisation
  NoteForLoan
  Price
  Record{
    Category
    Format
    ISBN
    _id
    Title
    Summary
    RecYear
    Publishers
    ParallelTitle
    OtherInformations
    OriginalLanguage
    NoteAuthor
    IsNum
    Baskets
    AccMaterial
    AuthorityLink
    FkSeries
    CollectionTitle
  }
  ReplacementPrice
  Reserves
  Restricted
  Stack
  WithDrawn
}
    }
`;
module.exports = {
    GetAllCopies,
    GetOneCopy,
    GetOneCopyByCode
}
