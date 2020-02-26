import React from "react";

import "./collection-preview.scss";
import CollectionItem from "../collection-item";

const CollectionPreview = ({ title, items }) => {
  const renderItems = ({id, ...props}) => <CollectionItem key={id} {...props}/>
  const filterItems = (item, idx) => idx < 4;

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.filter(filterItems).map(renderItems)}
      </div>
    </div>
  );
};

export default CollectionPreview;
