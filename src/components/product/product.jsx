import React from 'react';
import './product.styles.scss';

const Product = ({ title, price, imageUrl, handleViewClick }) => (
  <div className="product">
    <h2 className="product-head">{title.toUpperCase()}</h2>
    <div
      className="product-body"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="product-footer">
      <span className="price">₦{price}</span>
      <span className="view" onClick={handleViewClick}>
        view
      </span>
    </div>
  </div>
);

export default Product;
