import React, { Component } from "react";
import SelectCard from '../SelectCard';
import API from '../../utils/API';


class Rent extends Component {
  constructor() {
    super()

    this.state = {
      categories: [],
      grabbedOption: null,
      inventory: [],
    }

  }

  componentDidMount() {
    API.findCategories().then(res => {
      this.setState({
        categories: res.data
      });
      console.log(this.state.categories);

    });
  }

  grabInventory = inventory => {
    this.setState({
      inventory: inventory
    });
    console.log(`working ${this.state.inventory}`);
  }

  

  render() {

    return (
      <div className="rentContainer">
        <SelectCard
          className="form-control"
          options={this.state.categories.map(item => ({
            label: item,
            value: item,
          }))}
        />
        
      </div>
    );
  }
}

export default Rent;