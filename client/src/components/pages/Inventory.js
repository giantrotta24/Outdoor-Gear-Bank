// import React from "react";
import React, { Component } from "react";

const state = {
  items: "",
  category: ""
};

class Inventory extends Component {
// function Inventory() {
  render() {
  return (
    <div className="container bg-light border">
      <div className="col-1-md"></div>
      <div className="col-10-md"></div>

      <h1>Update Inventory</h1>
      <form>
              {/* <Input
              value={this.state.category}
              onChange={this.handleInputChange}
              name="category" 
              placeholder="Category (required)"
              />
              {/* {console.log("topic= ", this.state.topic)} */}
              {/* <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search</FormBtn> */} 
            </form>
      <div className="col-1-md"></div>
    </div>
  );
  } 
}

export default Inventory;