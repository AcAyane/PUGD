import gql from "graphql-tag";

const InsertOrderLine = gql`
  mutation(
    $id: String!
    $order: String!
    $isbn: String!
    $title: String!
    $author: String!
    $quantity: Int!
    $price: Float!
    $discount: Float!
    $status: String!
  ) {
    insertOrderLine(
      id: $id
      order: $order
      isbn: $isbn
      title: $title
      author: $author
      quantity: $quantity
      price: $price
      discount: $discount
      status: $status
    )
  }
`;

//important
module.exports = {
  InsertOrderLine,
};
