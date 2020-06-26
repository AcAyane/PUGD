import gql from 'graphql-tag';

const GET_COPY = gql`
query($Id : String, $code_bar : String){
  copy(id:$Id, code_bar:$code_bar){
    _id
    BareCode
    Price
    ReplacementPrice
    DateLastBorrowed
    DateLastSeen
    Stack
    NoteForLoan
    WithDrawn
    Reserves
    Restricted
    CopyNumber
    NewStatus
    
  }
}
`;
const GET_COPY_ALL_FIELDS = gql`
 
query($BareCode : String){
  copies(BareCode:$BareCode){
    _id
    BareCode
    Price
    ReplacementPrice
    DateLastBorrowed
    DateLastSeen
    Stack
    NoteForLoan
    WithDrawn
    Reserves
    Restricted
    CopyNumber
    NewStatus
    
  }
}
`;


module.exports = {
  GET_COPY: GET_COPY,
  GET_COPY_ALL_FIELDS: GET_COPY_ALL_FIELDS, 

}