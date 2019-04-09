// import React from "react";
import React, { Component } from "react";
import ReturnForm from '../ReturnForm';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';
import API from '../../utils/API';
import { Container, Row, Col } from "../Grid";
// import { Input, FormBtn, SelectItemStatus, SelectCondition, TextArea } from "../Form";
import DeleteBtn from '../DeleteBtn';
import Wrapper from '../Wrapper';

class Return extends Component {

  state = {
    last_name: "",
    customerID: "",
    customers: [],
    results: [],
    items: [],
    error: "",
    itemID: ""
  };

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
    API.findCustomerByLastName(this.state.last_name)
      .then(res => {
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
      })
      .catch(err => this.setState({ error: err.message }));
  };

  deleteItemFromCustomer = itemID => {
    API.deleteItemFromCustomer(this.state.customerID, itemID)
      .then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  updateItem = itemID => {
    console.log("updating item");
    console.log(itemID);
    API.updateItem(
      itemID,
      {
        status: "In Maintenance"
      }
    ).then(res => this.loadItems())
    .catch(err => console.log(err))
  };

  loadItems = () => {
    API.findCustomerByLastName(this.state.last_name)
      .then(res => {
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
      })
      .catch(err => this.setState({ error: err.message }));
  };
  

  render() {
    return (
      <Wrapper>
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
                          {item.name} ({item.category})
                        </strong>
                      </p>
                      <p>
                        Serial Number: {item.serial_number}
                      </p>
                      <p>
                        Date Due: {item.date_due}
                      </p>
                      <DeleteBtn onClick={() => { this.deleteItemFromCustomer(item._id); this.updateItem(item._id);}} />
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
      </Wrapper>
    )
  }
}

export default Return;

