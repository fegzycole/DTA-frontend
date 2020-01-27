import React, { Fragment } from "react";
import './formInput.styles.scss';

const FormInput = ({ handleChange, size, ...otherProps }) => (
  <Fragment>
    <input
      className={`formInput ${size}`}
      onChange={handleChange}
      {...otherProps}
    />
  </Fragment>
);

export default FormInput;
