import gql from 'graphql-tag';

const GetAllGrroups = gql`
    query{
        GetAllGrroups{
            _id,
            name,
            created_at,
            responsable{
                first_name,
                last_name,
                _id
            },
        }
    }
`;

const GroupsByName = gql`
    query($name: String!){
        GetGroupsByName(name: $name){
            _id
            name,
            created_at,
            responsable{
                first_name,
                last_name,
                _id
            },
            members{
                _id,
                first_name,
                last_name
            }
        }
    }
`;
module.exports = {
    GetAllGrroups,
    GroupsByName,
};
