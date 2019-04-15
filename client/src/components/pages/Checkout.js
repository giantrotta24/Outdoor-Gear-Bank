import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from '../Grid';
import CheckoutForm from '../CheckoutForm';
import CustomerForm from '../CustomerForm';
import Notification from '../Notification';
import ReturnForm from '../ReturnForm';
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
            })
        }, 2000);
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
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
                        {this.state.customer.length ? (
                            <Row>
                                <Col size='md-12'>
                                    <Container>
                                        <Row>
                                            <Col className='text-center' size='md-12'>
                                                <h3>Cutsomer Info</h3>
                                                <CustomerCard>
                                                    <button className='btn-danger btn rent-button' onClick={this.checkoutCustomer}>Checkout</button>
                                                    {this.state.customer.map((info, key) => {
                                                        return (
                                                            <div className='row' key={key}>
                                                                <div className='col text-left'>
                                                                    <p> Name: {info.first_name + ' ' + info.last_name}</p>
                                                                    <p> Member #: {info.member_number}</p>
                                                                    <p> Email: {info.email}</p>
                                                                    <p> Phone #: {info.phone_number}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </CustomerCard>
                                                {this.state.showNotification &&
                                                    <Notification>
                                                        {this.state.alert}
                                                    </Notification>
                                                }
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
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

}

export default Checkout;