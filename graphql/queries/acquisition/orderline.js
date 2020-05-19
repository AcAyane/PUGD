import gql from "graphql-tag";
const GetAllOrderLines = gql`
  query($order: String!) {
    getAllOrderLines(order: $order) {
      id
      isbn
      title
      author
      quantity
      price
      discount
      status
    }
  }
`;

module.exports = {
  GetAllOrderLines,
};
