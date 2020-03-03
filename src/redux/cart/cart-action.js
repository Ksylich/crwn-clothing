import { CartActionTypes } from "./cart-type";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
};

export const addCartItem = (item) => {
  return {
    type: CartActionTypes.ADD_CART,
    payload: item
  };
};
