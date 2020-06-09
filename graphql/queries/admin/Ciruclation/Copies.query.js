import gql from 'graphql-tag';

const GetOneCopy = gql`
    query{
     getOneCopy{
            _id,
            BareCode,
            ReplacementPrice,
            CopyNumber,
            NewStatus 
            
          
        }
    }
`;
const GetAllCopies = gql`
    query{
     getAllCopies{
            _id,
            BareCode,
            ReplacementPrice,
            CopyNumber,
            NewStatus 
            
          
        }
    }
`;
module.exports = {
    GetAllCopies,
    GetOneCopy
}
