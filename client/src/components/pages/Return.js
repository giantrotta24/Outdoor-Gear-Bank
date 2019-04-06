// import React from "react";
import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../Form";

class Return extends Component {
  // function Available() {
  state = {
    fName: '',
    lName: '',
    email: '',
    custPhone: '',
    itemComment: '',
    custMemNum: 0,
    itemsRented: '',
    state: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="container bg-light border">
        <div className="col-1-md"></div>
        <div className="col-10-md"></div>

        <h3 className="mt-3 mb-5">Rent</h3>

        {/* {this.state.items.map((item,index) => (
    //    console.log("item.fname= ",item.fname)
    <p>
      {item.fname}
    </p>
      ))} */}

        <form>
          <div className="form-group mb-3">

            <div className="card">
              <div className="card-body">
                <h4 className="card-title mt-3 mb-3">Enter Customer's Rental</h4>

                <label htmlFor="cust-fname">Customer First Name:</label>
                <Input
                  value={this.state.fName}
                  onChange={this.handleInputChange}
                  name="fName"
                  placeholder="Customer First Name"
                />
                {console.log("first name= ", this.state.fName)}
                {/* <div className="form-group"> */}
                {/* <input type="text" className="form-control" id="item-name" name="item-name">
                </input> */}
                {/* </div> */}

                <label htmlFor="cust-lName">Customer Last Name:</label>
                <Input
                  value={this.state.lName}
                  onChange={this.handleInputChange}
                  name="lName"
                  placeholder="Customer Last Name"
                />
                {console.log("last name= ", this.state.lName)}

                <label htmlFor="cust-email">Customer Email:</label>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Customer email"
                />
                {console.log("email=", this.state.email)}
                {/* <div className="form-group">               
                  <select className="custom-select" id="item-status">                    
                    <option selected>Choose...</option>
                    <option value="Available">Available</option>
                    <option value="Out for Rend">Out for Rent</option>
                    <option value="In Maintenance">In Maintenance</option>
                  </select>
              </div> */}

                <label htmlFor="cust-phone">Customer Phone Number:</label>
                <Input
                  value={this.state.custPhone}
                  onChange={this.handleInputChange}
                  name="custPhone"
                />
                {console.log("custPhone= ", this.state.custPhone)}

                <label htmlFor="custMemNum">Customer Member Number:</label>
                <Input
                  value={this.state.custMemNum}
                  onChange={this.handleInputChange}
                  name="custMemNum"
                />
                {console.log("custMemNum= ", this.state.custMemNum)}

                <label htmlFor="items-rented">Items Rented:</label>
                <Input
                  value={this.state.itemsRented}
                  onChange={this.handleInputChange}
                  name="itemsRented"
                />
                {console.log("itemsRented=", this.state.itemsRented)}

                {/* <select className="custom-select" id="item-condition">
                    <option selected>Choose...</option>
                    <option value="New">New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
              </div> */}

                {/* <label htmlFor="item-comment">Comment:</label>
                <TextArea
                  value= {this.state.itemComment}
                  onChange= {this.handleInputChange}
                  name= "itemComment"
                />
                {console.log("itemComment=", this.state.itemComment)} */}


                {/* <div className="form-group">
                <textarea className="form-control" rows="5" id="item-comment"></textarea>
              </div> */}

                {/* <label htmlFor="item-maint-comment">Maintenance Comments:</label>
                <TextArea
                    value= {this.state.maintComment}
                    onChange= {this.handleInputChange}
                    name= "maintComment"
                />
                {console.log("itemComment=", this.state.maintComment)} */}

                {/* <label htmlFor="item-dateout">Date Rented:</label>
                  <Input
                    value= {this.state.dateOut}
                    onChange= {this.handleInputChange}
                    name= "dateOut"                 
                  /> 

                <label htmlFor="item-datedue">Date Due:</label>
                  <Input
                    value= {this.state.dateDue}
                    onChange= {this.handleInputChange}
                    name= "dateDue"                 
                  />  */}
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

export default Return;