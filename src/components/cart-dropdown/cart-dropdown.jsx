import React from "react";

import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";


import CartItem from "../cart-item";
import CustomButton from "../custom-button";

import "./cart-dropdown.scss";
import 'react-perfect-scrollbar/dist/css/styles.css';

const CartDropdown = ({ cartItems }) => {
  const renderCartItem = item => <CartItem key={item.id} item={item} />;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <PerfectScrollbar>{cartItems.map(renderCartItem)}</PerfectScrollbar>
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToprops = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToprops)(CartDropdown);
