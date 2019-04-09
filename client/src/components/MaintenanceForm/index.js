import React from "react";

function MaintenanceForm(props) {
  return (
    <div className="container">
      <form className="serial_number">
        <div className="form-group">
          <label htmlFor="items">Search By Serial Number:</label>
          <input
            value={props.serial_number}
            onChange={props.handleInputChange}
            serial_number="serial_number"
            type="text"
            className="form-control"
            placeholder="Enter Item's Serial Number"
            id="serial_number"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
        </button>
        </div>
      </form>
    </div>

  );
}

export default MaintenanceForm;