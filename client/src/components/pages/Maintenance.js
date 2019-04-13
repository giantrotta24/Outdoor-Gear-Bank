import React, { Component } from 'react';
import { List, ListItem } from '../List';
import { Container, Row, Col } from '../Grid';
import { MaintStatusBtn, AddMaintCommentBtn, UpdateConditionBtn, TextArea, SelectCondition } from '../Form';
import API from '../../utils/API';
import MaintenanceForm from '../MaintenanceForm';
import DeleteCommentBtn from '../DeleteCommentBtn';

class Maintenance extends Component {
  state = {
    serial_number: '',
    results: [],
    item: '',
    items: [],
    itemID: '',
    thisItemCondition: '',
    itemCondition: [],
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
    this.findItemWithMaintComments(this.state.serial_number);
  };

  findItemWithMaintComments() {
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
  }

  updateStatus = (itemID) => {
    let body = {
      status: 'Available'
    }
    API.updateItem(itemID, body)
      .then(res => {
        if (res.status === 200) {
          this.setState({ 
            state: this.state,
            item: '' 
          })
        }
      })
    this.findAllMaintenanceItems();
  }

  updateCondition = (itemID, newCondition) => {
    API.updateItem(
      itemID,
      {
        condition: newCondition
      }
    ).then(res => {
      if (this.state.item) {
        this.findItemWithMaintComments();
      }
      this.findAllMaintenanceItems();
    })
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
          this.findItemWithMaintComments();
          this.findAllMaintenanceItems();
        }
        else console.log('error: ', res.status);
      })
  }

  deleteComment = (commentID) => {
    console.log('deleting comment:' + commentID);
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
      <div className='inventoryContainer'>
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
                <List>
                  <ListItem key={this.state.item._id}>
                    <p>
                      <strong>
                        {this.state.item.name} ({this.state.item.category})
                      </strong>
                    </p>
                    <strong>Serial Number:</strong> {this.state.item.serial_number}
                    <br />
                    <strong>Item Condition:</strong> {this.state.item.condition}
                    <br />
                    <strong>Comments:</strong>
                    <ul className='maintUL'>
                      {this.state.maintenance_comments.map((mcomment, index) => {
                        return (
                          <li className='maintLI' key={mcomment._id}>
                          {mcomment.body}
                          <DeleteCommentBtn onClick={() => this.deleteComment(mcomment._id)} />
                          </li>
                        )
                      })}
                    </ul>
                    <label className='update' htmlFor='item-condition'>Update Item Condition:</label>
                    <SelectCondition
                      name={'thisItemCondition'}
                      value={this.state.thisItemCondition}
                      handleChange={this.handleInputChange}
                    />
                    <TextArea
                      value={this.state.maintenanceComment}
                      onChange={this.handleInputChange}
                      name={'maintenanceComment'}
                      placeholder='Enter New Maintenance Comment Here...'
                    />
                    <UpdateConditionBtn
                      id={this.state.item._id}
                      onClick={() => this.updateCondition(this.state.item._id, this.state.thisItemCondition)}
                    />
                    <AddMaintCommentBtn
                      id={this.state.item._id}
                      onClick={() => this.updateMaintComment(this.state.item._id, this.state.maintenanceComment)}
                    />
                    <MaintStatusBtn
                      id={this.state.item._id}
                      onClick={() => this.updateStatus(this.state.item._id)}
                    />
                  </ListItem>
                </List>
              ) : (
                
                <Row>
                  <Col size='md-12'>
                    {this.state.itemsInMaint.length ? (
                      <List>
                      <h2 className='mb-5'>All Items In Maintenance</h2>
                        {this.state.itemsInMaint.map((item, index) => (
                          <ListItem key={item._id}>
                            <p><strong>{item.name} ({item.category})</strong></p>
                            <strong>Serial Number:</strong> {item.serial_number}
                            <br />
                            <strong>Item Condition:</strong> {item.condition}
                            <br />
                            <strong>Comments:</strong>
                            <ul className='maintUL'>
                              {item.maintenance_comments.map((cText, index) => {
                                return (
                                  <li className='maintLI' key={cText._id}>
                                  {cText.body} 
                                  <DeleteCommentBtn onClick={() => this.deleteComment(cText._id)} /></li>
                                )
                              })}
                            </ul>
                            <br />
                            <label htmlFor='item-condition'>Update Item Condition:</label>
                            <SelectCondition
                              name={'itemCondition' + index}
                              value={this.state.itemCondition[index]}
                              handleChange={this.handleInputChange}
                            />
                            <TextArea
                              value={this.state.maintCommentIn[index]}
                              onChange={this.handleInputChange}
                              name={'maintCommentIn' + index}
                              placeholder='Enter New Maintenance Comment Here...'
                            />
                            <MaintStatusBtn
                              id={item._id}
                              onClick={() => this.updateStatus(item._id)}
                            />
                            <UpdateConditionBtn
                              id={item._id}
                              onClick={() => this.updateCondition(item._id, this.state['itemCondition' + index])}
                            />
                            <AddMaintCommentBtn
                              id={item._id}
                              onClick={() => this.updateMaintComment(item._id, this.state['maintCommentIn' + index])}
                            />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                        <h3>No Items Currently in Maintenance</h3>
                      )}
                  </Col>
                </Row>
              
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Maintenance;
