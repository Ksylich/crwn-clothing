import React from "react";

import SHOP_DATA from "./shop-data";

import "./shop-page.scss";
import CollectionPreview from "../../components/collection-preview";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  };

  renderCollection = ({ id, ...props }) => {
    return <CollectionPreview key={id} {...props} />;
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">{collections.map(this.renderCollection)}</div>
    );
  }
}

export default ShopPage;
