import gql from "graphql-tag";
const GetOrderLine = gql`
  query($id: String!) {
    getOneOrderLine(id: $id) {
      order
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
      quantityfactured
    }
  }
`;

const FilteredOrderLines = gql`
  query($ids: [ID!]!) {
    getAllOrderLines(filter: { id_in: $ids }) {
      ...OrderLineInfo
    }
  }

  fragment OrderLineInfo on OrderLine {
    isbn
    title
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
  FilteredOrderLines,
  GetOrderLine,
};
