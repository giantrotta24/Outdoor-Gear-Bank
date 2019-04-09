// import React from "react";
import React, { Component } from "react";
import items from "../../available.json";
import API from "../../utils/API.js";

class Maintenance extends Component {
  // function Available() {
  state = {
    items: []
  };

  componentDidMount() {
    API.findAll({
      "status": "In Maintenance"
    }).then(res => {
      this.setState({
        items: res.data
      });
    });
    console.log("component did mount: " + this.state.items);
  };

  render() {
    return (
      <div className="container bg-light border">
        <div className="col-1-md"></div>
        <div className="col-10-md"></div>

        <h1>Maintenance Page</h1>

        <div className="col-1-md"></div>
      </div>
    );
  }
}

export default Maintenance;