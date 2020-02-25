import React from "react";
import classNames from "classnames";
import "./menu-item.scss";
const MenuItem = ({ title, image, size }) => {
  const classNms = classNames({ large: size }, "menu-item");
  return (
    <div className={classNms}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
