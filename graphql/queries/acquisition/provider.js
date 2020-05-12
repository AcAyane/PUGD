<<<<<<< HEAD
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
||||||| parent of bddeded... CRUD provider
=======
import gql from 'graphql-tag';

const GetAllProviders = gql`
  query {
    getallproviders {
      _id
      name
      adress
      phone
      email
    }
  }
`;

const GetOneProvider = gql`
  query($id: String!) {
    getoneprovider(id: $id) {
      _id
      account
      adress
      email
      establishement
      name
      phone
      website
    }
  }
`;

module.exports = {
  GetAllProviders,
  GetOneProvider
};
>>>>>>> bddeded... CRUD provider
