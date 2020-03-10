import { CartActionTypes } from "./cart-type";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
};

export const addCartItem = item => {
  return {
    type: CartActionTypes.ADD_CART,
    payload: item
  };
};

export const removeCartItem = item => {
  return {
    type: CartActionTypes.REMOVE_CART,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  };
};
