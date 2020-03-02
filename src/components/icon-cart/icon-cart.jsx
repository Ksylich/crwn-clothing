import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import "./icon-cart.scss";

const CartIcon = ({toggleHiddenCart}) => {
  return (
    <div className="cart-icon" onClick={toggleHiddenCart}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleHiddenCart: toggleCartHidden
};

export default connect(null, mapDispatchToProps)(CartIcon);
