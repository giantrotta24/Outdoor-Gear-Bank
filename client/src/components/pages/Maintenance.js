import React, { Component } from "react";
import { List, ListItem } from "../List";
import { CommentBtn } from "../CommentBtn";
import { TextArea } from "../Form";
import API from '../../utils/API';
// import items from "../../available.json";

class Maintenance extends Component {
  // function Available() {
  state = {
    inventory: [],
    itemsInMaintenance: [],
    maintID: null,
    maintComments: []

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  // updateMaintcomment = () => {
  //   API.addmaintComment(maintID,comment)
  //     .then(res => {
  //     console.log('newItem= ', newItem)
  //     console.log("res= ", res);
  //     if (res.status === 200) {
  //       alert("Inventory update successful!");
  //       this.setState({
  //         state: this.state.state,
  //         itemName: '',
  //         category: '',
  //         serialNumber: '',
  //         imageURL: '',
  //         seletedOption: ''
  //       });
  //     }
  //   })
  // }

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
      this.state.itemsInMaintenance.forEach(inMaint => {
        // this.setState({
        //   maintID: inMaint._id,
        //   maintComment: inMaint.maintenance_comments
        // });
      
        console.log('object id item in maint= ',inMaint._id);
        API.findItemWithMaintComments(inMaint._id).then(res => {
          this.setState({maintComments: res.data})
          console.log('findItemWithMaintComment= ', res.data);
        })
      })
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
          
      
          {/* <strong> */}
            
            <strong>Item Name:</strong>  {item.name}
            <br />            
            <strong>Item Status:</strong>   {item.status}
            <br />
            <strong>Serial Number:</strong> {item.serial_number} 
            <br />
            {/* <img src={item.image} alt="" style={{width: '200px',height: '200px'}}/>
            <br /> */}
            <strong>Maintenance Comments:</strong> 
            <br />
            {console.log('maint comment= ',this.state.maintComments)}
            {this.state.maintComments.map((comment,index) => {
            
              console.log('comment= ', comment)
            
            })}
        
        <CommentBtn 
        id={this.state.maintID}
        onClick={() => this.maintComment(item._id)}
        />

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