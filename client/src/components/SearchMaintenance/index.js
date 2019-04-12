import React from "react";
import "./search-maintenance.css";

function SearchMaintenance(props) {
  return (
    <div className="container">
      <form className="serial_number">
        <div className="form-group">
          <button type="search-all" onClick={props.handleFormSubmit} className="maintenance-btn btn btn-primary float-right mt-2">
            Find All
          </button>
        </div>
      </form>
    </div>

  );
}

export default SearchMaintenance;