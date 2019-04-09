import React from "react";
import './return-results.css';

// ReturnResults renders a bootstrap list item
const ReturnResults = ({ children }) => {
  return <ul className="list-group">{children}</ul>;
}

export default ReturnResults;


