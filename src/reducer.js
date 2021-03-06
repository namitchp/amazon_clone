export const initialState = {
  basket: [],
  user: null,
};
//Selector
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Remove_From_Basket":
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn("cant remove (id:&{action.id}) as its not in basket!");
      }
      return {
        ...state,
        basket: newbasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
