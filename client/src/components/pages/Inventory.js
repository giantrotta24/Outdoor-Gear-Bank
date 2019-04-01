// import React from "react";
import React, { Component } from "react";

<<<<<<< HEAD
const state = {
  items: "",
  category: ""
=======
state = {
  items,
  category: "";
>>>>>>> 0f9afde8edf45683296ee13fe59331f58f1616ca
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
<<<<<<< HEAD
              {/* <Input
=======
              <Input
>>>>>>> 0f9afde8edf45683296ee13fe59331f58f1616ca
              value={this.state.category}
              onChange={this.handleInputChange}
              name="category" 
              placeholder="Category (required)"
              />
              {/* {console.log("topic= ", this.state.topic)} */}
<<<<<<< HEAD
              {/* <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search</FormBtn> */} 
=======
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search</FormBtn>
>>>>>>> 0f9afde8edf45683296ee13fe59331f58f1616ca
            </form>
      <div className="col-1-md"></div>
    </div>
  );
  } 
}

export default Inventory;