import React, { Component } from "react";
import SelectCard from '../SelectCard';
import API from '../../utils/API';


class Rent extends Component {
  constructor() {
    super()

    this.state = {
      selectOption: null,
      inventory: [],
    }

  }

  // loads saved books on initial page render
  componentDidMount() {
    API.findCategories().then(res => {
      this.setState({
        inventory: res.data
      });

    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <SelectCard 
        onChange={this.handleChange}
        value={this.selectedOption}
        options={this.state.inventory.map(item => ({
          label: item,
          value: item,
        }))}
      />
    );
  }
}

export default Rent;