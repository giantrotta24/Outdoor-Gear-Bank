import React from "react";
import "./return-form.css";

function ReturnForm(props) {
  return (
    <div className="container">
      <form className="last_name">
        <div className="form-group">
          <label htmlFor="customers">Search By Customer:</label>
          <input
            value={props.last_name}
            onChange={props.handleInputChange}
            name="last_name"
            type="text"
            className="form-control"
            placeholder="Enter Customer's Last Name Here"
            id="last_name"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="customer-btn btn btn-primary">
            Search
        </button>
        </div>
      </form>
    </div>

  );
}

export default ReturnForm;
