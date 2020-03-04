import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart-selectors";

import "./checkout-page.scss";
import CheckoutItem from "../../components/checkout-item";

const CheckoutPage = ({ cartItems, total }) => {
  const renderCheckoutItem = item => <CheckoutItem cartItem={item} />;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Poduct</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(renderCheckoutItem)}

      <div className="total">Total: {total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
