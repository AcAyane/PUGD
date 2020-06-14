import gql from "graphql-tag";

const InsertFacture = gql`
  mutation(
    $id: String!
    $numFacture: String!
    $payementDate: String!
    $total_ttc: Float!
    $currency: Float!
    $establishement: String!
    $order_lines: [String!]!
  ) {
    insertFacture(
      id: $id
      establishement: $establishement
      numFacture: $numFacture
      payementDate: $payementDate
      total_ttc: $total_ttc
      currency: $currency
      date: $date
      order_lines: $order_lines
    )
  }
`;
module.exports = {
  InsertFacture,
};
