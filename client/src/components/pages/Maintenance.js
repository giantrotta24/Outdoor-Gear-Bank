import React, { Component } from "react";
import { List, ListItem } from "../List";
import { CommentBtn } from "../CommentBtn";
import { MaintStatusBtn, AddMaintCommentBtn, MaintCommentInput } from "../Form";
import API from '../../utils/API';

class Maintenance extends Component {
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
    let body = {
      status: "Available"
    }
    API.updateItem(itemID, body)
      .then(res => {
        if (res.status === 200) {
          this.setState({ state: this.state })
        }
      })
      this.findAllMaintenanceItems();
  }

  updateMaintComment = (itemID, newComment) => {
    API.addMaintComment(itemID,
      {
        body: newComment
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            maintCommentIn: ''
          });
          this.findAllMaintenanceItems();
        }
        else console.log("error: ", res.status);
      })
  }

  componentDidMount() {
    API.findMaintenanceItems()
      .then(res => {
        this.setState({ 
          itemsInMaint: res.data,
          maintCommentIn: '' })
      })
  }

  findAllMaintenanceItems() {
    API.findMaintenanceItems()
    .then(res => {
      this.setState({ itemsInMaint: res.data })
    })
  }

  render() {
    return (
      <div className="inventoryContainer">
      <div className="container bg-light border mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="mt-5 mb-1">Items In Maintenance</h3>
            {this.state.itemsInMaint.length ? (
              <List>
                {this.state.itemsInMaint.map((item, index) => (
                  <ListItem key={item._id}>
                    <strong>Item Name:</strong>  {item.name}
                    <br />
                    <strong>Item Status:</strong>   {item.status}
                    <br />
                    <strong>Serial Number:</strong> {item.serial_number}
                    <br />
                    <strong>Maintenance Comments:</strong>
                    <ul>
                      {item.maintenance_comments.map((cText, index) => {
                        return (
                          <li>{cText.body} </li>
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
      </div>
    );
  }
}

export default Maintenance;
