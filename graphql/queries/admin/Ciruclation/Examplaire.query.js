import gql from "graphql-tag";
//todo complet this
const EXAMPLAIR_BY_CODE = gql`
    query($code: String){
        copies(BareCode:$code){
            _id,
            BareCode,
        }
    }
`;
const FIND_COPY = gql`
    query($code: String){
        copies(BareCode:$code){
            _id,
            BareCode,
        }
    }
`;

module.exports = {
    EXAMPLAIR_BY_CODE,
    FIND_COPY,
}
