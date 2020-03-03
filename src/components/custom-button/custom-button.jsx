import React from "react";
import classNames from "class-names";

import "./custom-biutton.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => {
  const style = classNames({
    "google-sign-in": isGoogleSignIn,
    invedted: inverted
  });
  return (
    <button className={`${style} custom-button`} {...props}>
      {children}{" "}
    </button>
  );
};
export default CustomButton;
