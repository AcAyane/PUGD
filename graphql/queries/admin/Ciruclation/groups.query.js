import gql from 'graphql-tag';

const GetAllGrroups = gql`
    query{
        GetAllGrroups{
            _id,
            namegroups,
            CreatedAt,
            respgroup,
            letterrappel,
            libellegroup,
            mailRappel,
        }
    }
`;

const GroupsByName = gql`
    query($name: String!){
        GetGroupsByName(name : $name,){
            namegroups,
            CreatedAt,
            respgroup,
            letterrappel,
            libellegroup,
            mailRappel,
        }
    }
`;
module.exports = {
    GetAllGrroups,
    GroupsByName,
};
