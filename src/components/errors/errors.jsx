import React from 'react';
import './errors.styles.scss';

const Error = ({ errors }) => (
  <ul class='error-list'>
    {
      errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))
    }
  </ul>
);

export default Error;
