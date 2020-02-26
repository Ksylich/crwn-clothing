import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const classNms = classNames({ large: size }, "menu-item");
  const onItemClick = () => {
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div className={classNms} onClick={onItemClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
