import React from 'react';
import './fileInput.styles.scss';

const FileInput = ({ handleChange, ...allProps }) => (
  <div className="fileInput">
    <input { ...allProps } onChange={handleChange} />
  </div>
);

export default FileInput
