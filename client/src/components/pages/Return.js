import React, { Component } from 'react';
import ReturnForm from '../ReturnForm';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';
import API from '../../utils/API';
import { Container, Row, Col } from '../Grid';
import DeleteBtn from '../DeleteBtn';
import ReturnBtn from '../ReturnBtn';
import { SelectCondition, TextArea } from '../Form';

class Return extends Component {

  state = {
    last_name: '',
    phone_number: '',
    member_number: '',
    email: '',
    customerID: '',
    customers: [],
    results: [],
    items: [],
    error: '',
    itemID: '',
    itemCondition: [],
    itemComment: []
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.last_name) {
      API.findCustomerByLastName(this.state.last_name)
        .then(res => {
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          this.setState({
            results: res.data,
            error: '',
            customers: res.data,
            items: res.data[0].items,
            customerID: res.data[0]._id,
            customer: res.data[0].first_name + ' ' + res.data[0].last_name,
            last_name: ''
          });
        })
        .catch(err => this.setState({ error: err.message }));
    } else if (this.state.phone_number) {
      API.findCustomerByPhoneNumber(this.state.phone_number)
        .then(res => {
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          this.setState({
            results: res.data,
            error: '',
            customers: res.data,
            items: res.data[0].items,
            customerID: res.data[0]._id,
            customer: res.data[0].first_name + ' ' + res.data[0].last_name,
            phone_number: ''
          });
        })
        .catch(err => this.setState({ error: err.message }));
    } else if (this.state.member_number) {
      API.findCustomerByMemberNumber(this.state.member_number)
        .then(res => {
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          this.setState({
            results: res.data,
            error: '',
            customers: res.data,
            items: res.data[0].items,
            customerID: res.data[0]._id,
            customer: res.data[0].first_name + ' ' + res.data[0].last_name,
            member_number: ''
          });
        })
        .catch(err => this.setState({ error: err.message }));
    } else if (this.state.email) {
      API.findCustomerByEmail(this.state.email)
        .then(res => {
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          this.setState({
            results: res.data,
            error: '',
            customers: res.data,
            items: res.data[0].items,
            customerID: res.data[0]._id,
            customer: res.data[0].first_name + ' ' + res.data[0].last_name,
            email: ''
          });
        })
        .catch(err => this.setState({ error: err.message }));
    }
  };

  selectCustomer = customer => {
    this.setState({
      items: customer.items,
      customerID: customer._id,
      customer: customer.first_name + ' ' + customer.last_name,
      customers: [],
      last_name: customer.last_name
    })
  }

  deleteItemFromCustomer = itemID => {
    API.deleteItemFromCustomer(this.state.customerID, itemID)
      .then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  putInMaintenance = (itemID, condition) => {
    API.updateItem(
      itemID,
      {
        status: 'In Maintenance',
        condition: condition
      }
    ).then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  makeAvailable = (itemID, condition) => {
    API.updateItem(
      itemID,
      {
        status: 'Available',
        condition: condition
      }
    ).then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  addComment = (id, comment) => {
    if (comment) {
    API.addMaintComment(
      id,
      {
        body: comment
      }
    ).then(res => this.loadItems())
      .catch(err => console.log(err))
    }
  };

  loadItems = () => {
    API.findCustomerByLastName(this.state.last_name)
      .then(res => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        this.setState({
          results: res.data,
          error: '',
          customers: '',
          items: res.data[0].items,
          customerID: res.data[0]._id
        });
      })
      .catch(err => this.setState({ error: err.message }));
  };


  render() {
    return (
      <div className='returnContainer'>
        <Container>
          <Row>
            <Col size='md-12'>
              <h2>Returning Rental Items?</h2>
              <Container>
                <Row>
                  <Col size='md-12'>
                    <ReturnForm
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
              {this.state.customers.length ? (
                <ul className='customerUL'>
                  <h3>Select Customer Below</h3>
                  {this.state.customers.map((customer, index) => {
                    return (
                      <li className='customerLI' key={customer._id}>
                        <Row>
                          <Col size='md-6'>
                            <p><strong>{customer.first_name} {customer.last_name}</strong> <br />
                              Phone Number: {customer.phone_number} <br />
                              Email: {customer.email} <br />
                              Member Number: {customer.member_number} <br />
                              # of Rented Items: {customer.items.length} 
                            </p>
                          </Col>
                          <Col size='md-6'>
                            <button 
                            className='customer-btn btn btn-primary'
                            onClick={() => this.selectCustomer(customer)}>
                            Select</button>
                          </Col>
                        </Row>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                  <Row>
                    <Col size='md-12 sm-12'>
                      {this.state.items.length ? (
                        <ReturnResults>
                          <h3>Items Rented Out By {this.state.customer}</h3>
                          {this.state.items.map((item, index) => {
                            return (
                              <ReturnResultsItem key={item._id}>
                                <p>
                                  <strong>
                                    {item.name} ({item.category})
                            </strong>
                                </p>
                                <p>
                                  Serial Number: {item.serial_number}
                                </p>
                                <label htmlFor='item-condition'>Update Item Condition:</label>
                                <SelectCondition
                                  name={'itemCondition' + index}
                                  value={this.state.itemCondition[index]}
                                  handleChange={this.handleInputChange}
                                />
                                <label htmlFor='item-comment'>Add Comment About Item's Condition:</label>
                                <TextArea
                                  value={this.state.itemComment[index]}
                                  onChange={this.handleInputChange}
                                  name={'itemComment' + index}
                                />
                                <DeleteBtn onClick={() => { this.deleteItemFromCustomer(item._id); this.putInMaintenance(item._id, this.state['itemCondition' + index]); this.addComment(item._id, this.state['itemComment' + index]); }} />
                                <ReturnBtn onClick={() => { this.deleteItemFromCustomer(item._id); this.makeAvailable(item._id, this.state['itemCondition' + index]); this.addComment(item._id, this.state['itemComment' + index]); }} />
                              </ReturnResultsItem>
                            );
                          })}
                        </ReturnResults>
                      ) : (
                          <h3>No Results to Display</h3>
                        )}
                    </Col>
                  </Row>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Return;