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
          items: res.data[0].items
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
          <Col size="md-12">
            {!this.state.items.length ? (
              <h3>No Results to Display, Enter Last Name Above</h3>
            ) : (
                <ReturnResults>
                  <h3>Items Rented Out By {this.state.results[0].first_name} {this.state.results[0].last_name}</h3>
                  {this.state.items.map(item => {
                    return (
                      <ReturnResultsItem
                        key={item._id}
                        name={item.name}
                        serial_number={item.serial_number}
                        date_due={item.date_due}
                        thumbnail={item.image}
                      />
                    );
                  })}
                </ReturnResults>
              )}
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Return;

