import React, { Component } from "react";
import { List, ListItem } from "../List";
import API from '../../utils/API';
// import items from "../../available.json";

class Maintenance extends Component {
  // function Available() {
  state = {
    inventory: [],
    itemsInMaintenance: []
    
  };

  componentDidMount() {
    API.findAll().then(res => {
      this.setState({
        inventory: res.data
      });
      console.log("All inventory= ", this.state.inventory);
      this.state.inventory.forEach( element => {
        if (element.status == "In Maintenance"){
          
            this.setState({ itemsInMaintenance: [...this.state.itemsInMaintenance, element]})
        
          console.log("element= ", element);
          console.log("itemsInMaintenance= ", this.state.itemsInMaintenance);
          
            // this.setState({itemsInMaintenance: [...element]})
        }
        
  
      });
    });
  }

  render() {
    return (
      <div className="container bg-light border mt-5">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">

            <h3 className="mt-5 mb-1">Items In Maintenance</h3>

            


           
        {this.state.itemsInMaintenance.length ? (
        <List>
          {this.state.itemsInMaintenance.map((item,index) => (
          <ListItem key={item._id}>
      
          <strong>
            
            Item Name: {item.name}
            <br />            
            Item Status:   {item.status}
            <br />
            Serial Number: {item.serial_number} 
            <br />
            {/* <img src={item.image} alt="" style={{width: '200px',height: '200px'}}/>
            <br /> */}
            Maintenance Comments: {item.maintenance_comments}
                     
          </strong>
        
        {/* <DeleteBtn 
        // onClick={() => this.deleteBook(book._id)}
        /> */}

      </ListItem>
    ))}
  </List>
  ) : (
    <h3>No Results to Display</h3>
   )}




            
          </div>
            <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Maintenance;