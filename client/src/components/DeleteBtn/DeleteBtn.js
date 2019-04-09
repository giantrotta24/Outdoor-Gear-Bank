import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      Remove Item From Customer's Inventory
    </span>
  );
}

export default DeleteBtn;