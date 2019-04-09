// import React from "react";
import React, { Component } from "react";
import MaintenanceForm from '../MaintenanceForm';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';
import API from '../../utils/API';
import { Container, Row, Col } from "../Grid";
// import { Input, FormBtn, SelectItemStatus, SelectCondition, TextArea } from "../Form";
import DeleteBtn from '../DeleteBtn';
import Wrapper from '../Wrapper';

class Maintenance extends Component {

  state = {
    serial_number: "",
    items: []
  };

  componentDidMount() {
    API.findAll()
      .then(res => this.setState({ items: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  // CHANGE THE BELOW TO FIND ITEM BY SERIAL NUMBER

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.findCustomerByLastName(this.state.last_name)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({
  //         results: res.data,
  //         error: "",
  //         customers: "",
  //         items: res.data[0].items,
  //         customerID: res.data[0]._id,
  //         customer: res.data[0].first_name + " " + res.data[0].last_name
  //       });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  updateItem = itemID => {
    console.log("updating item");
    console.log(itemID);
    API.updateItem(
      itemID,
      {
        status: "Available"
      }
    ).then(res => this.render())
      .catch(err => console.log(err))
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
            <Col size="md-12 sm-12">
              {this.state.items.length ? (
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
                        <DeleteBtn onClick={() => { this.updateItem(item._id) }} />
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

export default Maintenance;