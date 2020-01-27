import React from 'react';
import './modal.styles.scss';

const Modal = ({ children }) => (
  <div className="spin-backdrop">
    <div className="spin-modal">
      { children }
    </div>
  </div>
);

export default Modal;
