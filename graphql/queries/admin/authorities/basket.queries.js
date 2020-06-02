import gql from 'graphql-tag';

const GET_BASKET = gql`
query($Basket:BasketInputType){
  basket(basket:$Basket){
    _id
    basket_name
    basket_note
    basket_type
    basket_color
    basket_elements
  }
}
`;

module.exports = {
  GET_BASKET,

}
