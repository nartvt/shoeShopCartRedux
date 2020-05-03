import {combineReducers} from 'redux';
import productReducer from './product';
import cartReducer from './cart';

const rootReducer = combineReducers({
  // all of data will be save at heres
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
