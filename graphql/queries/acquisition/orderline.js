import gql from "graphql-tag";
const GetOrderLine = gql`
  query($id: String!) {
    getOneOrderLine(id: $id) {
      quantityreceived
    }
  }
`;

const GetAllOrderLines = gql`
  query($order: String!) {
    getAllOrderLines(order: $order) {
      _id
      isbn
      title
      author
      quantity
      price
      discount
      status
      quantityreceived
    }
  }
`;

const GetOrderLines = gql`
  query {
    getAllOrderLines {
      _id
      isbn
      title
      author
      quantity
      price
      discount
      status
      quantityreceived
    }
  }
`;

module.exports = {
  GetOrderLines,
  GetAllOrderLines,
  GetOrderLine,
};
