import gql from "graphql-tag";

const EXAMPLAIR_BY_CODE = gql`
    query($code: String!){
        GetExamplaireByCodeBar(code_bar: $code){
            _id
            BareCode
            Record{
                _id,
                Title,
                RecYear,
            }
            CopyNumber
            Localisation
            __typename
            Stack
            
        }
    }
`;

module.exports = {
    EXAMPLAIR_BY_CODE,
}
