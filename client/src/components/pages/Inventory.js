// import React from "react";
import React, { Component } from "react";
import { Input, FormBtn, SelectItemStatus, SelectCondition, TextArea} from "../Form";


class Inventory extends Component {

  state = {
    itemName: '',
    category: '',
    itemStatus: '',
    itemCondition: '',
    itemComment: '',
    serialNumber: '',
    imageURL: '',
    maintComment: '',
    dateOut: '',
    dateDue: '',
    state: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

// function Inventory() {
  render() {
  return (
  <div className="container bg-light border">
    <div className="col-1-md"></div>
    <div className="col-10-md"></div>

      <h3 className= "mt-3 mb-5">Add Inventory</h3>
      <form> 
        <div className="form-group mb-3">

          <div className="card">
            <div className="card-body">
              <h4 className="card-title mt-3 mb-3">Item Data</h4>

              <label for="item-name">Name:</label>
              <Input
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name="itemName" 
                placeholder="Name of Item"
              />
              {console.log("itemName= ",this.state.itemName)}
              {/* <div className="form-group"> */}               
                {/* <input type="text" className="form-control" id="item-name" name="item-name">
                </input> */}
              {/* </div> */}

              <label for="item-catagory">Category:</label>
              <Input
                value= {this.state.category}
                onChange= {this.handleInputChange}
                name= "category" 
                placeholder= "Category ex. Tents"                
              />
              {console.log("category= ",this.state.category)}

              <label for="item-status">Item Status:</label>
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

              <label for="item-sn">Serial Number:</label>
                <Input
                  value= {this.state.serialNumber}
                  onChange= {this.handleInputChange}
                  name= "serialNumber"                 
              />
              {console.log("category= ",this.state.serialNumber)}

              <label for="item-image">Image URL:</label>
                <Input
                  value= {this.state.itemImage}
                  onChange= {this.handleInputChange}
                  name= "itemImage"                 
                />  
              {console.log("category= ",this.state.imageURL)}

              <label for="item-condition">Item Condition:</label>
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

              <label for="item-comment">Comment:</label>
                <TextArea
                  value= {this.state.itemComment}
                  onChange= {this.handleInputChange}
                  name= "itemComment"
                />
                {console.log("itemComment=", this.state.itemComment)}


              {/* <div className="form-group">
                <textarea className="form-control" rows="5" id="item-comment"></textarea>
              </div> */}

              <label for="item-maint-comment">Maintenance Comments:</label>
                <TextArea
                    value= {this.state.maintComment}
                    onChange= {this.handleInputChange}
                    name= "maintComment"
                />
                {console.log("itemComment=", this.state.maintComment)}

                <label for="item-dateout">Date Rented:</label>
                  <Input
                    value= {this.state.dateOut}
                    onChange= {this.handleInputChange}
                    name= "dateOut"                 
                  /> 

                <label for="item-datedue">Date Due:</label>
                  <Input
                    value= {this.state.dateDue}
                    onChange= {this.handleInputChange}
                    name= "dateDue"                 
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
  } 
}

export default Inventory;