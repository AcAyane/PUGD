import gql from 'graphql-tag';

const InsertProvider = gql`
  mutation(
    $establishement: String!
    $name: String!
    $account: String!
    $adress: String!
    $phone: String!
    $email: String!
    $website: String!
  ) {
    insertProvider(
      establishement: $establishement
      name: $name
      account: $account
      adress: $adress
      phone: $phone
      email: $email
      website: $website
    )
  }
`;

//important
module.exports = {
  InsertProvider
};
