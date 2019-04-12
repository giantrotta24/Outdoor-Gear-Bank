import React, { Component } from "react";
import { List, ListItem } from "../List";
import { CommentBtn } from "../CommentBtn";
import { MaintStatusBtn, AddMaintCommentBtn, MaintCommentInput } from "../Form";
import API from '../../utils/API';
// import items from "../../available.json";

class Maintenance extends Component {
  // function Available() {
  state = {
    inventory: [],
    itemsInMaint: [],
    maintID: null,
    maintComments: [],
    comment_text: [],
    maintCommentIn: [],
    maintCommentItem: '',
    state: '' 
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  updateStatus = (itemID) => {
    let newStatus = {
      status: "Available"
    }
    console.log("updating status for id= ", itemID);
    API.updateItem(itemID,newStatus)
    .then( res => {
      if (res.status === 200) {
        alert("Item status changed to Available!");
        this.setState({state: this.state})
      }
    })
  }

  updateMaintComment = (itemID, newComment) => {
    console.log('newcommnet= ', newComment);
    // let newComment= { 
    //   body: this.state.maintCommentIn
    // }
    API.addMaintComment(itemID,
      {
        body: newComment
      })
      .then(res => {
      if (res.status === 200) {
        alert("Maintenance Comment added successful!");
        this.setState({
          maintCommentIn: []
        });
      }
      else console.log("error: ",res.status);
    })
  }

  // componentDidMount() {
  //   API.findAll().then(res => {
  //     this.setState({
  //       inventory: res.data
  //     });
  //     console.log("All inventory= ", this.state.inventory);
  //     this.state.inventory.forEach( element => {
  //       // console.log("element.status= ", element.status)
  //       if (element.status === "In Maintenance"){
  //         console.log("elements in maintenance= ", element)
  //           this.setState({ itemsInMaintenance: [...this.state.itemsInMaintenance, element]})
  //           // console.log("itemsInMaintenance= ", this.state.itemsInMaintenance);
  //           // API.findItemWithMaintComments(this.state.itemsInMaintenance._id).then(res => {
  //           API.findItemWithMaintComments(element._id).then(res => {
  //             this.setState({maintComments: res.data})
  //            //  console.log('findItemWithMaintComment= ', this.state.maintComments);
  //             this.state.maintComments.map((maint_comment,index) => {
  //                // console.log('comment= ', maint_comment.maintenance_comments, ' index= ',index)
  //                maint_comment.maintenance_comments.map((comment_text,index) => {
  //                  // console.log('comment text= ',comment_text.body, ' index= ', index)
  //                  this.setState({comment_text: [...this.state.comment_text, comment_text.body]})
  //                 //  console.log("comment_text=", this.state.comment_text)
  //                })
  //             })

  //           });
  //         }
  //     });
  //   });
  // }

  componentDidMount() {
    API.findMaintenanceItems()
    .then(res => {
      console.log('res.data= ',res.data)
        this.setState({itemsInMaint: res.data})
        // console.log('itemsInMaint= ',this.state.itemsInMaint)
      })
    }    

  render() {
    return (
      <div className="container bg-light border mt-5">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">

            <h3 className="mt-5 mb-1">Items In Maintenance</h3>  
        {/* {this.state.itemsInMaintenance.length ? ( */}
          {/* {console.log("itemsInMaintenance.length= ",this.state.itemsInMaintenance.length)} */}
          {console.log('itemsInMaint= ',this.state.itemsInMaint)}
          {this.state.itemsInMaint.length ? (
        <List>
          {/* {this.state.itemsInMaintenance.map((item,index) => ( */}
            
            {this.state.itemsInMaint.map((item,index) => (
            
          <ListItem key={item._id}>
            {/* {console.log('item from array map= ', item)} */}
            <strong>Item Name:</strong>  {item.name}
            <br />            
            <strong>Item Status:</strong>   {item.status}
            <br />
            <strong>Serial Number:</strong> {item.serial_number} 
            <br />
            {/* <img src={item.image} alt="" style={{width: '200px',height: '200px'}}/>
            <br /> */}
            <strong>Maintenance Comments:</strong> 
            
             {/* {this.state.comment_text.map((cText,index) => { 
              // console.log('cText.body=', cText);   
          })} */}
          <ul>
          {/* {this.state.comment_text.map((cText,index) => { */}
          {item.maintenance_comments.map((cText,index) => {
            
            return(
              
              <li  key={index}>{cText.body} </li>
            )
          })}
            <li>
            <MaintCommentInput
              value={this.state.maintCommentIn[index]}
              onChange={this.handleInputChange}
              name={"maintCommentIn" + index}
              placeholder="Type comment then click Add Comment..."
          />
            </li>
          </ul>
          
        <MaintStatusBtn
          id={item._id}
          onClick={() => this.updateStatus(item._id)}
        />
        <AddMaintCommentBtn
        id={item._id}
        onClick={() => this.updateMaintComment(item._id, this.state["maintCommentIn" + index])}
        />
        
        {/* <CommentBtn 
        id={this.state.maintID}
        onClick={() => this.maintComment(item._id)}
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