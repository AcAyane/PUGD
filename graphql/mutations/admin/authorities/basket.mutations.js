import gql from 'graphql-tag';

const INSERT_BASKET = gql`
mutation(
  $BasketName: String,
  $BasketNote: String,
  $BasketType : String,
  $BasketColor : String,
  $BasketElements : [String], 
){
  InsertBasket(
    BasketName:$BasketName,
    BasketNote:$BasketNote,
    BasketType:$BasketType,
    BasketColor:$BasketColor,
    BasketElements:$BasketElements,
  )
}

`;

const UPDATE_BASKET = gql`
mutation(
  $Id: String!
  $BasketName: String,
  $BasketNote: String,
  $BasketType : String,
  $BasketColor : String,
  $BasketElements : [String], ){
  UpdateAuthor(
    Id : $Id,
    BasketName:$BasketName,
    BasketNote:$BasketNote,
    BasketType:$BasketType,
    BasketColor:$BasketColor,
    BasketElements:$BasketElements,
  )
}
`;


module.exports = {
  INSERT_BASKET,
  UPDATE_BASKET,
}
