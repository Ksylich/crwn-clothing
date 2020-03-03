import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import {selectCartItemCount} from '../../redux/cart/cart-selectors';

import "./icon-cart.scss";

const CartIcon = ({toggleHiddenCart, itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleHiddenCart}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleHiddenCart: toggleCartHidden
};

const mapStateToProps = state => ({
  itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
