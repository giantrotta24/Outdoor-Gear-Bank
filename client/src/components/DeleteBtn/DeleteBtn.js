import React from 'react';
import './DeleteBtn.css';

function DeleteBtn(props) {
  return (
    <span className='delete-btn btn btn-danger' {...props} role='button' tabIndex='0'>
      Put Item in Maintenance
    </span>
  );
}

export default DeleteBtn;