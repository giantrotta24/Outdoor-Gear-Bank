import React, { Component } from "react";
import API from '../../utils/API';

class Main extends Component {
  state = {
    rentedInventory: [],
    maintInventory: [],
  }

  componentDidMount() {
    API.findAll().then(res => {
      let inventory = res.data;
      console.log(inventory);
      inventory.map(item => {
        if (item.status === 'Out for Rent') {
          this.setState({ rentedInventory: item });
          console.log(this.state.rentedInventory);
        } else if (item.status === 'In Maintenance') {
          this.setState({ maintInventory: item });
          console.log(this.state.maintInventory);
        }
      })
    });
  }

  render() {
    return (

      <div>
        <div className="rent-page-cont">
          <p>hello</p>
        </div>
        <div className="maint-page-cont">
          <p>hello</p>
        </div>
      </div>

    );
  }
}

export default Main;