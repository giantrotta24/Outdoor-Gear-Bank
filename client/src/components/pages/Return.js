// import React from "react";
import React, { Component } from "react";
import ReturnForm from '../ReturnForm';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';
import API from '../../utils/API';
import { Container, Row, Col } from "../Grid";
// import { Input, FormBtn, SelectItemStatus, SelectCondition, TextArea } from "../Form";
import DeleteBtn from '../DeleteBtn';

class Return extends Component {

  state = {
    last_name: "",
    customerID: "",
    customers: [],
    results: [],
    items: [],
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.findAllCustomers()
      .then(res => this.setState({ customers: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.last_name);
    API.findCustomerByLastName(this.state.last_name)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({
          results: res.data,
          error: "",
          customers: "",
          items: res.data[0].items,
          customerID: res.data[0]._id
        });
        console.log(this.state.items);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  deleteItemFromCustomer = itemID => {
    console.log("itemID:" + itemID);
    console.log("customerID:" + this.state.customerID);
    API.deleteItemFromCustomer(this.state.customerID, itemID)
      .then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  loadItems = () => {
    API.findCustomerByLastName(this.state.last_name)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({
          results: res.data,
          error: "",
          customers: "",
          items: res.data[0].items,
          customerID: res.data[0]._id
        });
        console.log(this.state.items);
      })
      .catch(err => this.setState({ error: err.message }));
  };
  

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Container>
              <Row>
                <Col size="md-12">
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
        <Col size="md-12 sm-12">
            {this.state.items.length ? (
              // <h3>Items Rented Out By {this.results[0].first_name} {this.results[0].last_name}</h3>
              <ReturnResults>
                {this.state.items.map(item => {
                  return (
                    <ReturnResultsItem key={item._id}>
                      <p>
                        <strong>
                          {item.name}
                        </strong>
                      </p>
                      <p>
                        Serial Number: {item.serial_number}
                      </p>
                      <p>
                        Date Due: {item.date_due}
                      </p>
                      <DeleteBtn onClick={() => this.deleteItemFromCustomer(item._id)} />
                    </ReturnResultsItem>
                  );
                })}
              </ReturnResults>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

        </Row>
      </Container>

    )
  }
}

export default Return;

