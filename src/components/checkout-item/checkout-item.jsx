import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addCartItem, removeCartItem } from "../../redux/cart/cart-action";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
 
  const { name, quantity, price, imageUrl } = cartItem;
 
  const onDelete = () => deleteItem(cartItem);
  const onAdd = () => addItem(cartItem);
  const onRemove = () => removeItem(cartItem);

 

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={onRemove}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={onAdd}>&#10095;</div>
        </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={onDelete}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteItem: clearItemFromCart,
  addItem: addCartItem,
  removeItem: removeCartItem
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
