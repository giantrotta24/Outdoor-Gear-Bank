import React, { Component } from "react";
import SelectCard from '../SelectCard';
import ResultsCard from '../ResultsCard';
import API from '../../utils/API';


class Rent extends Component {
  constructor() {
    super()

    this.state = {
      categories: [],
      grabbedOption: null,
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
        <ResultsCard>

        </ResultsCard>
      </div>
    );
  }
}

export default Rent;