import React, { Component } from "react";
import { List, ListItem } from "../List";
import { CommentBtn } from "../CommentBtn";
import { Container, Row, Col } from '../Grid';
import { MaintStatusBtn, AddMaintCommentBtn, MaintCommentInput, TextArea, SelectCondition } from "../Form";
import API from '../../utils/API';
import ReturnResultsItem from '../ReturnResultsItem';
import ReturnBtn from '../ReturnBtn';
import ReturnResults from '../ReturnResults';
import MaintenanceForm from '../MaintenanceForm';

class Maintenance extends Component {
  state = {
    serial_number: '',
    results: [],
    item: '',
    items: [],
    itemID: '',
    itemCondition: '',
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

  handleFormSubmit = event => {
    event.preventDefault();
    API.findItemWithMaintComments(this.state.serial_number)
      .then(res => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        this.setState({
          results: res.data,
          item: res.data[0],
          maintenance_comments: res.data[0].maintenance_comments,
          comments: res.data[0].comments,
          error: '',
        });
        console.log(this.state.item);
        console.log(this.state.maintenance_comments);
      })
      .catch(err => this.setState({ error: err.message }));
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
    API.findMaintenanceItems().then(res => {
      this.setState({
        items: res.data,
      });
      console.log(this.state.items);
    });
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
              <h2>Need to Fix, Clean, or Repair Gear?</h2>
              <Container>
                <Row>
                  <Col size='md-12'>
                    <MaintenanceForm
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col size='md-12 sm-12'>
              {this.state.item ? (
                <ReturnResults>
                  <ReturnResultsItem key={this.state.item._id}>
                    <p>
                      <strong>
                        {this.state.item.name} ({this.state.item.category})
                      </strong>
                    </p>
                    <p><strong>Serial Number:</strong> {this.state.item.serial_number}</p>
                    <Row>
                      <h6><strong>Return Comments:</strong></h6>
                      {this.state.comments.map((comment, index) => {
                        return (
                          <ul>
                            <li key={comment._id}>{comment.body}</li>
                          </ul>
                        )
                      })}
                    </Row>
                    <Row>
                      <h6><strong>Maintenance Comments:</strong></h6>
                      {this.state.maintenance_comments.map((mcomment, index) => {
                        return (
                          <ul>
                            <li key={mcomment._id}>{mcomment.body}</li>
                          </ul>
                        )
                      })}
                    </Row>
                    <label htmlFor='item-condition'>Update Item Condition:</label>
                    <SelectCondition
                      name={'itemCondition'}
                      value={this.state.itemCondition}
                      handleChange={this.handleInputChange}
                    />
                    <label htmlFor='maintenance-comment'>Add Maintenance Comment:</label>
                    <TextArea
                      value={this.state.maintenanceComment}
                      onChange={this.handleInputChange}
                      name={'maintenanceComment'}
                    />
                    <ReturnBtn onClick={() => { this.makeAvailable(this.state.item._id, this.state.itemCondition); this.addMaintComment(this.state.item._id, this.state.maintenanceComment); }} />
                  </ReturnResultsItem>
                </ReturnResults>
              ) : (
                  <h5>Enter Serial Number Above to Display Specific Item Information Here</h5>
                )}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col size='md-12'>
              <h2 className="mb-5">All Items In Maintenance</h2>
              {this.state.itemsInMaint.length ? (
                <List>
                  {this.state.itemsInMaint.map((item, index) => (
                    <ListItem key={item._id}>
                      <p><strong>{item.name}</strong></p>
                      <strong>Serial Number:</strong> {item.serial_number}
                      <br />
                      <strong>Item Condition:</strong> {item.condition}
                      <br />
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
                  <h3>No Items Currently in Maintenance</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Maintenance;
