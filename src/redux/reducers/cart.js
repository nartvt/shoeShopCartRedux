import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_CART_ITEM,
} from '../actions/contants';

let initialState = [];

const reducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case ADD_TO_CART:
      index = state.findIndex(item => item.product.id === action.payload.id);
      if (index == -1) {
        let newProduct = {product: action.payload, quantity: 1};
        state.push(newProduct);
      } else {
        state[index].quantity++;
      }
      return [...state];
    case DECREASE_QUANTITY:
      if (state.length >= 0) {
        index = state.findIndex(item => item.product.id === action.payload);
        state[index] = {...state[index], quantity: --state[index].quantity};
      }
      return [...state];
    case INCREASE_QUANTITY:
      index = state.findIndex(item => item.product.id === action.payload);
      state[index] = {...state[index], quantity: ++state[index].quantity};
      return [...state];
    case REMOVE_CART_ITEM:
      index = state.findIndex(item => item.product.id === action.payload.id);
      state.splice(index, 1);
      action.payload.callBack && action.payload.callBack();
      return [...state];
    default:
      return state;
  }
};

export default reducer;
