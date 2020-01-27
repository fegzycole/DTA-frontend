import React from 'react';
import './image.styles.scss';

const Image = ({ imageUrl, name, styleName }) => (
  <div className={`image-component ${styleName}`}>
    <img src={imageUrl} alt={name}/>
  </div>
);

export default Image;
