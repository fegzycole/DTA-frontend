import React, { Fragment } from 'react';
import './textArea.styles.scss';

const TextArea = ({ name, handleChange, placeholder }) => (
  <Fragment>
    <textarea
      className="textarea"
      name={name}
      placeholder= {placeholder}
      onChange={handleChange}
      required
    />
  </Fragment>
);

export default TextArea;
