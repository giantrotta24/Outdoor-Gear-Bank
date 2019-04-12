import React, { Component } from "react";
import { List, ListItem } from "../List";
import { CommentBtn } from "../CommentBtn";
import { Container, Row, Col } from '../Grid';
import { MaintStatusBtn, AddMaintCommentBtn, MaintCommentInput, TextArea } from "../Form";
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
    this.findAllMaintenanceItems();
  }

  findAllMaintenanceItems() {
    API.findMaintenanceItems()
    .then(res => {
      console.log(res.data);
        this.setState({ itemsInMaint: res.data })
      })
  }

  render() {
    return (
      <div className="inventoryContainer">
        <Container>
          <Row>
            <Col size='md-12'>
              <h2 className="mb-5">Items In Maintenance</h2>
              {this.state.itemsInMaint.length ? (
                <List>
                  {this.state.itemsInMaint.map((item, index) => (
                    <ListItem key={item._id}>
                      <p><strong>{item.name}</strong></p>
                      <strong>Serial Number:</strong> {item.serial_number}
                      <br />
                      <strong>Item Condition:</strong> {item.condition}
                      <br />
                      <strong>Return Comments:</strong>
                      <ul>
                        {item.comments.map((cText, index) => {
                          return (
                            <li key={cText._id}>{cText.body} </li>
                          )
                        })}
                      </ul>
                      <strong>Maintenance Comments:</strong>
                      <ul>
                        {item.maintenance_comments.map((cText, index) => {
                          return (
                            <li key={cText._id}>{cText.body} </li>
                          )
                        })}
                      </ul>
                      <br />
                      <TextArea
                        value={this.state.maintCommentIn[index]}
                        onChange={this.handleInputChange}
                        name={"maintCommentIn" + index}
                        placeholder="Enter New Maintenance Comment Here..."
                      />
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Maintenance;
