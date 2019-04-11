import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn btn btn-danger" {...props} role="button" tabIndex="0">
      Put Item in Maintenance
    </span>
  );
}

export default DeleteBtn;