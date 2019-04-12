import React, { Component } from "react";
import { Container, Row, Col } from '../Grid';
import { SelectCondition, TextArea } from '../Form';
import CheckoutForm from '../CheckoutForm';
import ReturnForm from '../ReturnForm';

import API from '../../utils/API';

// const SearchButton = ({ renderUserSearch }) => {
//     return (
//         <button onClick={renderUserSearch} className='btn-success btn find-user-button' >Find Customer</button>
//     );
// }

// const EnterButton = ({ renderUserSubmit }) => {
//     return (
//         <button onClick={renderUserSubmit} className='btn-primary btn submit-user-button ml-3' >Find Customer</button>
//     );
// }


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
    }

    componentDidMount() {
        this.processFunction();
        this.findCustomers();
    }

    findCustomers = () => {
        API.findAllCustomers()
            .then(res => this.setState({ customers: res.data }))
            .catch(err => console.log(err));
        console.log(this.state.customers);
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
                        customer: res.data,
                        error: '',
                    });
                    console.log(this.state.customer);
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
                        error: '',
                    });
                    console.log(this.state.customer);
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
                        error: '',
                    });
                    console.log(this.state.customer);
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
                        error: '',
                    });
                    console.log(this.state.customer);
                })
                .catch(err => this.setState({ error: err.message }));
        }
    };

    processFunction = () => {
        API.process().then(res => {
            this.setState({ checkoutCart: res.data });
            console.log(this.state.checkoutCart);
        })
    }

    renderUserSearch = () => {
        this.setState({ newCustomer: false });
    }

    renderUserSubmit = () => {
        this.setState({ newCustomer: true });
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
                                            <p>Hello new customer</p>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Checkout;