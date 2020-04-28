import gql from 'graphql-tag';

const GET_BASKET = gql`
query(
  $Id : String,
  $BasketName: String,
  $BasketNote: String,
  $BasketType : String,
  $BasketColor : String,
  $BasketElements : [String], 
){
  basket(
    id:$Id,
    Basket_Name:$BasketName,
    Basket_Note:$BasketNote,
    Basket_Type:$BasketType,
    Basket_Color:$BasketColor,
    Basket_Elements:$BasketElements,
  ){
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
