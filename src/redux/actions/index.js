import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_CART_ITEM,
  ADD_TO_CART,
} from './contants';

export const createAction = (type, payload) => ({
  type,
  payload,
});
export const actionIncreaseQuantity = payload =>
  createAction(INCREASE_QUANTITY, payload);

export const actionDecreaseQuantity = payload =>
  createAction(DECREASE_QUANTITY, payload);

export const actionRemoveItem = payload =>
  createAction(REMOVE_CART_ITEM, payload);

export const actionAddToCart = payload => createAction(ADD_TO_CART, payload);
