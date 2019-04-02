import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
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
        //request to server here (add new username/password)
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password,
        }).then(response => {
            console.log(response);
            if (!response.data.error) {
                console.log('successful signup');
                this.setState({
                    redirectTo: '/'
                });
            } else {
                console.log('username already taken');
            }
        }).catch(error => {
            console.log('sign up error: ');
            console.log(error);
        });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="form-signup">
                    <i className="fas fa-lock"></i>
                    <div className="SignupForm">
                        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                        <label className="sr-only" htmlFor="username">Username</label>
                        <input
                            className="form-control"
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                            autoFocus
                        />
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />

                        <button
                            className="btn btn-lg btn-primary btn-block mt-3"
                            onClick={this.handleSubmit}
                            type="submit"
                        >Sign up</button>

                        <p className="mt-5 mb-3 text-muted">© 2019</p>
                    </div>
                </div>

            );
        }
    }
}

export default SignUp;