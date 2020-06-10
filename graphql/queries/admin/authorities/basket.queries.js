import gql from 'graphql-tag';

const GET_BASKET = gql`
query($Basket:BasketInputType){
  basket(basket:$Basket){
		_id
    basket_name
    basket_color
    basket_note
    basket_type
    basket_elements{
			element_type
      element{
     ... on AuthorType{
      _id
      name:name_auth
    }
     ... on CategoryType{
      _id
     name
          } 
      }
    }
  }
}
`;

module.exports = {
  GET_BASKET,

}
