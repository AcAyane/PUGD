import gql from "graphql-tag";

const GetDeliveryLine = gql`
  query($order: String!) {
    getAllDeliveryLines(order: $order) {
      _id
      isbn
      orderline
      order
      title
      newquantity
      date
    }
  }
`;

module.exports = {
  GetDeliveryLine,
};
