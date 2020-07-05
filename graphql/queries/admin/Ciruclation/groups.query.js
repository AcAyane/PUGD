import gql from 'graphql-tag';

const GET_ALL_GROUPS = gql`
    query{
        GetAllGrroups{
            _id,
            name
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
    GET_ALL_GROUPS,
    GroupsByName,
};
