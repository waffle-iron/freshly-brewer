import React from 'react';

const Col = ({ width, children }) => {
  return (
    <div className={`col-xs-${width}`}>
      {children}
    </div>
  )
}

export default Col;