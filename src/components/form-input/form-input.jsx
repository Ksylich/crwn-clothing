import React from "react";
import classNames from "class-names";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...props }) => {
  

  const shrink = classNames({ shrink: props.value.length });
 

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? (
        <label className={`${shrink} form-input-label`}>{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;