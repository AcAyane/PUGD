import gql from "graphql-tag";

const EXAMPLAIR_BY_CODE = gql`
    query($code: String!){
        copy(code_bar: $code){
            _id
            CopyNumber,
            
        }
    }
`;

module.exports = {
    EXAMPLAIR_BY_CODE,
}
