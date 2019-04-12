// import React from 'react';
import React, { Component } from 'react';
import API from '../../utils/API';
import { Container, Row, Col } from '../Grid';
import MaintenanceForm from '../MaintenanceForm';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';
import ReturnBtn from '../ReturnBtn';
import { SelectCondition, TextArea } from '../Form';

class Return extends Component {

  state = {
    serial_number: '',
    results: [],
    item: '',
    items: [],
    maintenance_comments: [],
    comments: [],
    error: '',
    itemID: '',
    itemCondition: '',
    maintenanceComment: '',
  };

  componentDidMount() {
    API.findMaintenanceItems().then(res => {
      this.setState({
        items: res.data,
      });
      console.log(this.state.items);
    });
  }

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

  render() {
    return (
      <div className='maintenanceContainer'>
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
                    <p>Serial Number: {this.state.item.serial_number}</p>
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
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Return;