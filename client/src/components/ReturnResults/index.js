import React from 'react';

const ReturnResults = ({ children }) => {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>{children}</ul>
    </div>
  );
}


export default ReturnResults;


