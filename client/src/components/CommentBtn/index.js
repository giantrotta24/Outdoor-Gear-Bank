import React from 'react';
import './style.css';

// Add Comment button for Comment and Maintenance Comments

export const CommentBtn = props => {
  return (
    <div>
      <button {...props} style={{ float: 'right', marginBottom: 10 }} className='btn btn-danger btn-sm'>
        Add Comment
      {props.children}
      </button>
      </div>
  );
}