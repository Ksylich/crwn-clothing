import React from "react";
import { connect } from "react-redux";

import "./collection-item.scss";
import CustomButton from "../custom-button";
import { addCartItem } from "../../redux/cart/cart-action";

const CollectionItem = ({item, addCart}) => {
  const { name, price, imageUrl } = item;
  const addItem = () => addCart(item);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={addItem}>
        ADD TO CART{" "}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addCart: addCartItem
};

export default connect(null, mapDispatchToProps)(CollectionItem);
