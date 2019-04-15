import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from '../Grid';
import CheckoutForm from '../CheckoutForm';
import CustomerForm from '../CustomerForm';
import ReturnForm from '../ReturnForm';
import Notification from '../Notification';
import API from '../../utils/API';

class Checkout extends Component {
    state = {
        last_name: '',
        phone_number: '',
        member_number: '',
        email: '',
        checkoutCart: [],
        customers: [],
        customer: [],
        newCustomer: null,
        error: '',
        itemIds: [],
        customerId: '',
        showNotification: false,
        alert: '',
        redirectTo: null,
    }

    componentDidMount() {
        this.processFunction()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    checkoutCustomer = (customerId) => {
        this.state.itemIds.forEach(id => {
            API.addItemToCustomer(customerId, id).then(res => {
                if (res.data.status === 'error') {
                    throw new Error(res.data.message);
                }
            });
        });
        this.checkout();
        this.setState({
            showNotification: true,
            alert: 'Thank you for using Outdoor Gear Bank'
        });
        this.delayState();
    }

    delayState = () => {
        setTimeout(() => {
            this.setState({
                redirectTo: '/main'
            });
            this.reroute();
        }, 2000);
    }


    reroute = () => {
        let path = '/main';
        this.props.history.push(path)
    }

    checkout = () => {
        API.checkout();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.last_name) {
            API.findCustomerByLastName(this.state.last_name)
                .then(res => {
                    if (res.data.status === 'error') {
                        throw new Error(res.data.message);
                    }
                    this.setState({
                        customer: res.data,
                        customers: res.data,
                        error: '',
                        customerId: res.data[0]._id
                    });
                    console.log(this.state.customer);
                    console.log(this.state.customerId);
                })
                .catch(err => this.setState({ error: err.message }));
        } else if (this.state.phone_number) {
            API.findCustomerByPhoneNumber(this.state.phone_number)
                .then(res => {
                    if (res.data.status === 'error') {
                        throw new Error(res.data.message);
                    }
                    this.setState({
                        customer: res.data,
                        customers: res.data,
                        error: '',
                        customerId: res.data[0]._id
                    });
                    console.log(this.state.customer);
                    console.log(this.state.customerId);
                })
                .catch(err => this.setState({ error: err.message }));
        } else if (this.state.member_number) {
            API.findCustomerByMemberNumber(this.state.member_number)
                .then(res => {
                    if (res.data.status === 'error') {
                        throw new Error(res.data.message);
                    }
                    this.setState({
                        customer: res.data,
                        customers: res.data,
                        error: '',
                        customerId: res.data[0]._id
                    });
                    console.log(this.state.customer);
                    console.log(this.state.customerId);
                })
                .catch(err => this.setState({ error: err.message }));
        } else if (this.state.email) {
            API.findCustomerByEmail(this.state.email)
                .then(res => {
                    if (res.data.status === 'error') {
                        throw new Error(res.data.message);
                    }
                    this.setState({
                        customer: res.data,
                        customers: res.data,
                        error: '',
                        customerId: res.data[0]._id
                    });
                    console.log(this.state.customer);
                    console.log(this.state.customerId);
                })
                .catch(err => this.setState({ error: err.message }));
        }
    };

    processFunction = () => {
        console.log(this.state.customer);
        let itemIds = [];
        API.process().then(res => {
            this.setState({ checkoutCart: res.data });
            console.log(this.state.checkoutCart);
            this.state.checkoutCart.forEach(item => {
                itemIds.push(item._id);
            });
            console.log(itemIds);
            this.setState({ itemIds: itemIds });
            console.log(this.state.itemIds);
        });
    }

    renderUserSearch = () => {
        this.setState({ newCustomer: false });
    }

    renderUserSubmit = () => {
        this.setState({ newCustomer: true });
    }

    handleCustomerFormSubmit = event => {
        event.preventDefault();
        let newCustomer = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number,
            email: this.state.email,
            member_number: this.state.member_number
        }

        API.addCustomer(newCustomer);
        API.findCustomerByMemberNumber(this.state.member_number).then(res => {
            this.setState({
                customer: res.data,
                customerId: res.data[0]._id
            });
            this.processFunction();
        });
    }


    render() {
        return (

            <div className='checkout-container'>
                <Container>
                    <Row>
                        <Col size='md-12'>
                            <h3>Find or Enter Customer Info</h3>
                            <Container>
                                <Row>
                                    <Col size='md-12'>
                                        <CheckoutForm
                                            renderUserSubmit={this.renderUserSubmit}
                                            renderUserSearch={this.renderUserSearch}
                                        />
                                        {!this.state.newCustomer &&
                                            <ReturnForm
                                                handleFormSubmit={this.handleFormSubmit}
                                                handleInputChange={this.handleInputChange}
                                            />
                                        }
                                        {this.state.newCustomer &&
                                            <CustomerForm
                                                handleFormSubmit={this.handleCustomerFormSubmit}
                                                handleInputChange={this.handleInputChange}
                                            />
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {this.state.showNotification &&
                        <Notification>
                            {this.state.alert}
                        </Notification>
                    }
                    {this.state.customer.length ? (
                        <Col size='md-12 sm-12'>
                            <ul className='customerUL'>
                                <h3>Select Customer Below</h3>
                                {this.state.customers.map((customer, key) => {
                                    return (
                                        <li className='customerLI' key={key}>
                                            <Row>
                                                <Col size='md-6'>
                                                    <p><strong>{customer.first_name} {customer.last_name}</strong> <br />
                                                        Phone Number: {customer.phone_number} <br />
                                                        Email: {customer.email} <br />
                                                        Member Number: {customer.member_number} <br />
                                                    </p>
                                                </Col>
                                                <Col size='md-6'>
                                                    <button
                                                        className='customer-btn btn btn-danger'
                                                        onClick={() => this.checkoutCustomer(customer._id)}>
                                                        Checkout</button>
                                                </Col>
                                            </Row>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Col>
                    ) : (
                            <Row>

                            </Row>
                        )
                    }
                </Container>
            </div>

        );
    }
}

export default withRouter(Checkout);