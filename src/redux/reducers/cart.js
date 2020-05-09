let initialState = [];

const reducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case 'ADD_TO_CART':
      index = state.findIndex(item => item.product.id === action.payload.id);
      if (index == -1) {
        let newProduct = {product: action.payload, quantity: 1};
        state.push(newProduct);
      } else {
        state[index].quantity++;
      }
      return [...state];
    case 'DECREASE_QUANTITY':
      console.log('DECREASE_QUANTITY: ', action.payload);
      if (state.length >= 0) {
        index = state.findIndex(item => item.product.id === action.payload);
        state[index] = {...state[index], quantity: --state[index].quantity};
      }
      return [...state];
    case 'INCREASE_QUANTITY':
      console.log('INCREASE_QUANTITY: ', action.payload);
      index = state.findIndex(item => item.product.id === action.payload);
      state[index] = {...state[index], quantity: ++state[index].quantity};
      return [...state];
    case 'REMOVE_CART_ITEM':
      console.log('REMOVE_CART_ITEM: ', action.payload);
      index = state.findIndex(item => item.product.id === action.payload);
      state.slice(index, 1);
      return [...state];
    default:
      return state;
  }
};

export default reducer;
