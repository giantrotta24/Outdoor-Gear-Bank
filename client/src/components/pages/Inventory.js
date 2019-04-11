// import React from "react";
import React, { Component } from "react";
import { FormInput, FormSelect, FormBtn } from "../Form";
import API from '../../utils/API';

class Inventory extends Component {

  state = {
    inventory: [],
    itemName: '',
    category: '',
    serialNumber: '',
    imageURL: '',
    seletedOption: '',
    options: [
      { label: "Snowshoes", value: "Snowshoes" },
      { label: "Stoves", value: "Stoves" },
      { label: "Tents", value: "Tents" },
      { label: "Sleeping Bags", value: "Sleeping Bags" },
      { label: "Accessories", vale: "Accessories" }
    ],
    state: ''
  };



  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.itemName && this.state.category &&
      this.state.serialNumber && this.state.imageURL) {
      // console.log("topic in formsubmit= ", this.state.topic)
      this.updateInv();
    }
    else {
      alert("All input fields required");
    }
  };

  updateInv = () => {

    let newItem = {
      name: this.state.itemName,
      category: this.state.category,
      serial_number: this.state.serialNumber,
      image: this.state.imageURL,
      condition: 'New',
      number_of_times_rented: 0

      // status: "Available",
      // comments: '',     
      // maintenance_comments: '',
      // date_rented_out: null,
      // date_due: null,
      // rented_by: ''
    };

    console.log('newItem before API= ', newItem)

    API.addItem(newItem)
      .then(res => {
        console.log('newItem= ', newItem)
        console.log("res= ", res);
        if (res.status === 200) {
          alert("Inventory update successful!");
          this.setState({
            state: this.state.state,
            itemName: '',
            category: '',
            serialNumber: '',
            imageURL: '',
            seletedOption: ''
          });
          console.log("state after inv update= ", this.state);
        }    
      })
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    console.log(`category:`, selectedOption.value);
    this.setState({ category: selectedOption.value })
  }

  componentDidMount() {
    API.findCategories().then(res => {
      this.setState({
        inventory: res.data
      });
      console.log("categories from inventory= ", this.state.inventory);
    });
  }

  render() {
    return (
      <div className="container bg-light border mt-5">
      
        <div className="row">
          <div className="col-md-2"></div>
         
          <div className="col-md-8">
              <h3 className="mt-5 mb-1">Add Inventory</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="item-name">Name (required):</label>
                  <FormInput
                    value={this.state.itemName}
                    onChange={this.handleInputChange}
                    name="itemName"
                    placeholder="Name of Item"
                    required="required"
                  />
                </div>
                {console.log("itemName= ", this.state.itemName)}

                <div className="form-group">
                  <label htmlFor="item-category">Category (required):</label>
                  <FormSelect
                    onChange={this.handleChange}
                    value={this.state.selectedOption}
                    options={this.state.options}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="item-serialNumber">Item Serial Number (required):</label>
                  <FormInput
                    value={this.state.serialNumber}
                    onChange={this.handleInputChange}
                    name="serialNumber"
                    placeholder="Item Serial Number"
                  />
                </div>
                {console.log("SerialNumber= ", this.state.serialNumber)}

                <div className="form-group">
                  <label htmlFor="item-imageURL">Item Imagae URL (required):</label>
                  <FormInput
                    value={this.state.imageURL}
                    onChange={this.handleInputChange}
                    name="imageURL"
                    placeholder="Item Image URL"
                  />
                </div>
                {console.log("Image URL= ", this.state.imageURL)}
                <FormBtn
                  // disabled={!(this.state.topic)}
                  onClick={this.handleFormSubmit}>
                  Submit
                </FormBtn>

              </form>
          </div>      
        </div> 
        <div className="col-md-2"></div>     
      </div>

    )
  }
}

export default Inventory;