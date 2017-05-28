import React from 'react';

const Row = ({ className, children, middle}) => {
  const middleClass = middle ? 'middle-xs' : undefined;

  return(
    <div className={`${className} ${middleClass} row`}>
      {children}
    </div>
  )
}

export default Row;