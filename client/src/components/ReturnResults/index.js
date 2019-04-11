import React from "react";

export function ReturnResults({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}


export default ReturnResults;


