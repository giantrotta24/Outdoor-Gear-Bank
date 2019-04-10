// import React from "react";
import React, { Component } from "react";
import ReturnForm from '../ReturnForm';
import ReturnResults from '../ReturnResults';
import ReturnResultsItem from '../ReturnResultsItem';
import API from '../../utils/API';
import { Container, Row, Col } from "../Grid";
import DeleteBtn from '../DeleteBtn';
import { SelectCondition, TextArea } from "../Form";

class Return extends Component {

  state = {
    last_name: "",
    customerID: "",
    customers: [],
    results: [],
    items: [],
    error: "",
    itemID: "",
    itemCondition: [],
    itemComment: []
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
          customerID: res.data[0]._id,
          customer: res.data[0].first_name + " " + res.data[0].last_name
        });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  deleteItemFromCustomer = itemID => {
    API.deleteItemFromCustomer(this.state.customerID, itemID)
      .then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  updateItem = (itemID, condition) => {
    API.updateItem(
      itemID,
      {
        status: "In Maintenance",
        condition: condition
      }
    ).then(res => this.loadItems())
      .catch(err => console.log(err))
  };

  addComment = (itemID, comment) => {
    API.addComment(
      itemID,
      {
        body: comment
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
      <div className="returnContainer">
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
                        <label htmlFor="item-condition">Update Item Condition:</label>
                        <SelectCondition
                          name={"itemCondition" + index}
                          value={this.state.itemCondition[index]}
                          handleChange={this.handleInputChange}
                        />
                        <label htmlFor="item-comment">Add Comment About Item's Condition:</label>
                        <TextArea
                          value={this.state.itemComment[index]}
                          onChange={this.handleInputChange}
                          name={"itemComment" + index} 
                        />
                        <DeleteBtn onClick={() => { this.deleteItemFromCustomer(item._id); this.updateItem(item._id, this.state["itemCondition" + index]); this.addComment(item._id, this.state["itemComment" + index]); }} />
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
      </div>
    )
  }
}

export default Return;