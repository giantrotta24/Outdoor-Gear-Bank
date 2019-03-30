import React, { Component } from 'react';
import { TextInput, Icon, CardPanel, Row, Col } from 'react-materialize';
import './style.css';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
        //request to server here
    }

    render() {
        return (
            <form>
                <Row>
                    <Col m={6} s={12}>
                    <CardPanel className="white">
                        <Icon large>
                            lock
                        </Icon>
                        <span className="black-text">Sign-Up</span>
                        <TextInput
                            onChange={this.handleChange}
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={this.state.username}
                        />

                        <TextInput
                            onChange={this.handleChange}
                            // password={true}
                            // placeholder="Password"
                            // type="password"
                            // name="password"
                            // value={this.state.password}
                        />
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
                    </CardPanel>
                    </Col>
                </Row>
            </form>
            // <div className="auth-container">
            //     <div className="contain">

            // </div>
            // <form className="SignUpForm">
            // <button className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
            //     </form>
            // </div>

        );
    }
}

export default SignUp;
