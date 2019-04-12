import React from "react";
import "./DeleteCommentBtn.css";

function DeleteCommentBtn(props) {
  return (
    <span className="deletecomment-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteCommentBtn;
