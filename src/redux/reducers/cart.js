let initialState = [];

const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_TO_CART':
      const index = state.findIndex(
        item => item.product.id === action.payload.id,
      );
      index === -1
        ? state.push({
            product: action.payload,
            quantity: 1,
          })
        : state[index].quantity++;
      console.log("State : ", state.length);
      return state;
    case 'DECREASE_QUANTITY':
      return state;
    case 'INCREASE_QUANTITY':
      return state;
    default:
      return state;
  }
};

export default reducer;
