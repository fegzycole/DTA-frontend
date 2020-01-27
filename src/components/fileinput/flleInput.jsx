import React from 'react';
import './fileInput.styles.scss';

const FileInput = ({ handleChange, ...allProps }) => (
  <div className="fileInput">
    <input { ...allProps } onChange={handleChange} required/>
  </div>
);

export default FileInput
