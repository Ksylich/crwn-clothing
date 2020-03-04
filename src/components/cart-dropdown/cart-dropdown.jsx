import React from "react";

import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import {toggleCartHidden} from '../../redux/cart/cart-action';

import "./cart-dropdown.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const renderCartItem = item => <CartItem key={item.id} item={item} />;
  const toCheckoutPage = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          <PerfectScrollbar>{cartItems.map(renderCartItem)}</PerfectScrollbar>
        ) : (
          <span className="empty-message"> Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={toCheckoutPage}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToprops)(CartDropdown));
