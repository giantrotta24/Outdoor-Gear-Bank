import React, { Component } from 'react';
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
            <div className="auth-container">
                <div className="contain">
                    <i className="fas fa-lock"></i>
                    <h1>Sign-Up</h1>
                </div>
                <form className="SignUpForm">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
