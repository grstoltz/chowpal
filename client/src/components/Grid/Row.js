import React from 'react';
/* eslint max-len: 0, react/prefer-stateless-function: 0 */

// This Row component lets us use a bootstrap row without having to think about class names
export const Row = ({ fluid, children, params }) => (
  <div className={`row ${params}`}>
    {children}
  </div>
);

