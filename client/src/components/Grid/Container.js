import React from 'react';
/* eslint max-len: 0, react/prefer-stateless-function: 0 */
import './Container.css';

// This Container component allows us to use a bootstrap container without worrying about class names
export const Container = ({ fluid, children, main }) => (
  <div className={`container${fluid ? '-fluid' : ''} ${main ? 'main-container' : ''} tanBackground `}>
    {children}
  </div>
);
