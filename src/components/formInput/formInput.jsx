import React from "react";
import './formInput.styles.scss';

const FormInput = ({ handleChange, ...otherProps }) => (
  <div className="group">
    <input
      className="formInput"
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);

export default FormInput;
