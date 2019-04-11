import React from "react";
import "./ReturnBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ReturnBtn(props) {
  return (
    <span className="return-btn btn btn-success" {...props} role="button" tabIndex="0">
      Return Item to Available
    </span>
  );
}

export default ReturnBtn;