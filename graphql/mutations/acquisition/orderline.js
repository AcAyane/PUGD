import gql from "graphql-tag";

const InsertOrderLine = gql`
  mutation(
    $_id: String!
    $order: String!
    $isbn: String!
    $title: String
    $author: String
    $quantity: Int
    $price: Float
    $discount: Float
    $status: String
  ) {
    insertOrderLine(
      _id: $_id
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

const UpdateOrderLine = gql`
  mutation(
    $_id: String!
    $isbn: String
    $title: String
    $author: String
    $quantity: Int
    $price: Float
    $discount: Float
    $status: String
    $quantityreceived: Int
    $quantityfactured: Int
  ) {
    updateOrderLine(
      _id: $_id
      isbn: $isbn
      title: $title
      author: $author
      quantity: $quantity
      price: $price
      discount: $discount
      status: $status
      quantityreceived: $quantityreceived
      quantityfactured: $quantityfactured
    )
  }
`;

const DeleteOrderLine = gql`
  mutation($_id: String!) {
    deleteOrderLine(_id: $_id)
  }
`;

//important
module.exports = {
  InsertOrderLine,
  UpdateOrderLine,
  DeleteOrderLine,
};
