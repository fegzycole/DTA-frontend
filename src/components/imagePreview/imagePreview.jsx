import React from 'react';
import './imagePreview.scss';

const ImagePreviewer = ({ imageUrl, alt }) => {
  const showImage = imageUrl ? <img src={imageUrl} alt={alt} /> : null;
  return <div className="imagePreviewer">{showImage}</div>;
};

export default ImagePreviewer;
