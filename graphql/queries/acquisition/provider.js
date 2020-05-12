import gql from "graphql-tag";

const GET_PROVIDERS = gql`
  query {
    getAllProviders {
      name
      adress
      email
    }
  }
`;

const GetOneProvider = gql`
  query {
    getoneprovider(id: "5e837b77394a3bda5624736c") {
      name
      adress
    }
  }
`;

module.exports = {
  GET_PROVIDERS,
  GetOneProvider
};
