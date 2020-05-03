import {combineReducers} from 'redux';
import productReducer from './product';

const rootReducer = combineReducers({
  // all of data will be save at heres
  products: productReducer,
});

export default rootReducer;
