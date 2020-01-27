import React from 'react';
import './button.styles.scss';

const Button = ({ children, ...otherProps }) => (
  <div className="btn-container">
    <button className="button" {...otherProps}>
      {children}
    </button>
  </div>
);

export default Button;
