import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './style.css';

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
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
        console.log('handleSubmit');

        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log('login response: ');
            console.log(response);
            if (response.status === 200) {
                //update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                });
                //redirect home
                this.setState({
                    redirectTo: '/main'
                });
            }
        }).catch(error => {
            console.log(`login error: ${error}`);
        });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="form-login">
                    <i className="fas fa-lock"></i>
                    <div className="LogInForm">
                        <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
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
                        >Log In</button>

                        <p className="mt-5 mb-3 text-muted">© 2019</p>
                    </div>
                </div>
            );
        }
    }
}

export default LogIn;