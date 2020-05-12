import gql from "graphql-tag";

const InsertOrder = gql`
  mutation(
    $establishement: String!
    $name: String!
    $id_number: String!
    $financial_year: String!
    $date: String!
    $delivery_address: String!
    $billing_address: String!
    $notes: String!
    $status: String!
    $type: String!
    $id_Provider: String!
    $order_line: String!
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
  InsertOrder
};
