import gql from "graphql-tag";
//todo complet this
const EXAMPLAIR_BY_CODE = gql`
    query($code: String){
        GetExamplaireByCodeBar(code_bar:$code){
            _id,
            BareCode,
          Record{
            Title
          }
         
        }
    }
`;

module.exports = {
    EXAMPLAIR_BY_CODE,
}
