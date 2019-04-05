import React, { Component } from "react";
import Select from 'react-select';
import API from '../../utils/API';


class Rent extends Component {
  constructor() {
    super()

    this.state = {
      selectOptions: null,
      inventory: [],
    }

  }

  // loads saved books on initial page render
  componentDidMount() {
    API.findAll().then(res => {
      this.setState({
        inventory: res.data
      });

    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }



  //   <div>
  //   {this.props.highlights_data.data.map((e, i) =>
  //     <SomeComponent key={i} label={e.label} value={e.value} />
  //   )}
  // </div>

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="container">
        <h1>Hello World</h1>
        <Select
          className="form-control"
          onChange={this.handleChange}
          value={selectedOption}
          options={this.state.inventory.map(item => ({
            label: item.name,
            value: item.name,
          }))}
        />
      </div>
    );
  }
}

export default Rent;