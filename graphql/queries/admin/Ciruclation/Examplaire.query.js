import gql from "graphql-tag";
//todo complet this
const EXAMPLAIR_BY_CODE = gql`
    query($code: String){
        copies(BareCode:$code){
            _id,
            BareCode,
            Record{
              Title,
              ISBN,
            },
        }
    }
`;
const FIND_COPY = gql`
    query($code: String){
        GetExamplaireByCodeBar(code_bar:$code){
           _id,
            BareCode, 
            Record{
                Title,
                RecYear,
            },
            MediaType{
                media_types_name
            },
            Status{
                status_name,
            }
            Localisation{
                Name
            }
            Owner{
                owner_name
            }
            Section{
                section_name
            }
        }
    }
`;

module.exports = {
    EXAMPLAIR_BY_CODE,
    FIND_COPY,
}
