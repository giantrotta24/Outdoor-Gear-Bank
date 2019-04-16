import React from 'react';
import './ReturnBtn.css';

const ReturnBtn = props => {
  return (
    <span className='return-btn btn btn-success' {...props} role='button' tabIndex='0'>
      Return Item to Available
    </span>
  );
}

export default ReturnBtn;