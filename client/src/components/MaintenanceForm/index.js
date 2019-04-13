import React from "react";
import "./maintenance-form.css";

function MaintenanceForm(props) {
  return (
    <div className="container">
      <form className="serial_number">
        <div className="form-group">
          <label htmlFor="item">Search Item By Serial Number</label>
          <input
            value={props.serial_number}
            onChange={props.handleInputChange}
            name="serial_number"
            type="text"
            className="form-control"
            placeholder="ex. MSR-SNOW-111"
            id="serial_number"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="maintenance-btn btn btn-primary float-right mt-2">
            Search
          </button>
        </div>
      </form>
    </div>

  );
}

export default MaintenanceForm;