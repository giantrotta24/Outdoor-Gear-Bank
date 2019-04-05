import React, { Component } from "react";
import AsyncSelect from 'react-select/lib/Async';
import './style.css';
import API from '../../utils/API';


class Rent extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      selectedOption: null,
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
      // <div className="container">

      <AsyncSelect
        className="form-control"
        value={selectedOption}
        onChange={this.handleChange}
        defaultOptions={this.state.inventory}
      />


    );
  }
}

export default Rent;