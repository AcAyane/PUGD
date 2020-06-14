import gql from "graphql-tag";
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
module.exports = {
  GetAllOrderLines,
  FilteredOrderLines,
};
