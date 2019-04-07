// import React from "react";
import React, { Component } from "react";
<<<<<<< HEAD
import { FormInput, FormSelect, Input, FormBtn, SelectItemStatus, SelectCondition, TextArea } from "../Form";
import API from '../../utils/API';
=======
import { Input, FormBtn, SelectItemStatus, SelectCondition, TextArea } from "../Form";
>>>>>>> ec15b6f1fccb594cc40705da0cab716ea33487d5

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
    // console.log("books at top of loadbooks", this.state.books);

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
        // this.setState({ 
        //   books: [...res.data.items], 
        //   topic: ""})        
      })
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

<<<<<<< HEAD
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

        <div className="col-3-md"></div>
        <div className="col-6-md">

          <h3 className="mt-3 mb-1">Add Inventory</h3>
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
        <div className="col-3-md"></div>
      </div>

    )
=======
  // function Inventory() {
  render() {
    return (
      <div className="container bg-light border">
        <div className="col-1-md"></div>
        <div className="col-10-md"></div>

        <h3 className="mt-3 mb-5">Add Inventory</h3>
        <form>
          <div className="form-group mb-3">

            <div className="card">
              <div className="card-body">
                <h4 className="card-title mt-3 mb-3">Item Data</h4>

                <label htmlFor="item-name">Name:</label>
                <Input
                  value={this.state.itemName}
                  onChange={this.handleInputChange}
                  name="itemName"
                  placeholder="Name of Item"
                />
                {console.log("itemName= ", this.state.itemName)}
                {/* <div className="form-group"> */}
                {/* <input type="text" className="form-control" id="item-name" name="item-name">
                </input> */}
                {/* </div> */}

                <label htmlFor="item-catagory">Category:</label>
                <Input
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  name="category"
                  placeholder="Category ex. Tents"
                />
                {console.log("category= ", this.state.category)}

                <label htmlFor="item-status">Item Status:</label>
                <SelectItemStatus
                  name="itemStatus"
                  value={this.state.itemStatus}
                  handleChange={this.handleInputChange}
                />
                {console.log("itemStatus=", this.state.itemStatus)}
                {/* <div className="form-group">               
                  <select className="custom-select" id="item-status">                    
                    <option selected>Choose...</option>
                    <option value="Available">Available</option>
                    <option value="Out for Rend">Out for Rent</option>
                    <option value="In Maintenance">In Maintenance</option>
                  </select>
              </div> */}

                <label htmlFor="item-sn">Serial Number:</label>
                <Input
                  value={this.state.serialNumber}
                  onChange={this.handleInputChange}
                  name="serialNumber"
                />
                {console.log("category= ", this.state.serialNumber)}

                <label htmlFor="item-image">Image URL:</label>
                <Input
                  value={this.state.itemImage}
                  onChange={this.handleInputChange}
                  name="itemImage"
                />
                {console.log("category= ", this.state.imageURL)}

                <label htmlFor="item-condition">Item Condition:</label>
                <SelectCondition
                  name="itemCondition"
                  value={this.state.itemCondition}
                  handleChange={this.handleInputChange}
                />
                {console.log("itemCondition=", this.state.itemCondition)}

                {/* <select className="custom-select" id="item-condition">
                    <option selected>Choose...</option>
                    <option value="New">New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
              </div> */}

                <label htmlFor="item-comment">Comment:</label>
                <TextArea
                  value={this.state.itemComment}
                  onChange={this.handleInputChange}
                  name="itemComment"
                />
                {console.log("itemComment=", this.state.itemComment)}


                {/* <div className="form-group">
                <textarea className="form-control" rows="5" id="item-comment"></textarea>
              </div> */}

                <label htmlFor="item-maint-comment">Maintenance Comments:</label>
                <TextArea
                  value={this.state.maintComment}
                  onChange={this.handleInputChange}
                  name="maintComment"
                />
                {console.log("itemComment=", this.state.maintComment)}

                <label htmlFor="item-dateout">Date Rented:</label>
                <Input
                  value={this.state.dateOut}
                  onChange={this.handleInputChange}
                  name="dateOut"
                />

                <label htmlFor="item-datedue">Date Due:</label>
                <Input
                  value={this.state.dateDue}
                  onChange={this.handleInputChange}
                  name="dateDue"
                />
              </div>
            </div>
          </div>
          <FormBtn
            // disabled={!(this.state.topic)}
            onClick={this.handleFormSubmit}
          >
            Submit</FormBtn>
        </form>

        <div className="col-1-md"></div>
      </div>
    );
>>>>>>> ec15b6f1fccb594cc40705da0cab716ea33487d5
  }
}

export default Inventory;