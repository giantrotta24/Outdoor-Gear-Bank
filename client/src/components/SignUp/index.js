import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card';
import axios from 'axios';
import './sign-up-style.css';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
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
        //request to server here (add new username/password)
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password,
        }).then(response => {
            console.log(response);
            if (response.data.error) {
                console.log('username already taken');
            } else {
                console.log('successful signup');
                this.reroute();
            }
        }).catch(error => {
            console.log('sign up error: ');
            console.log(error);
        });
    }

    reroute = () => {
        let path = '/main';
        this.props.history.push(path)
    }

    onKeyPress = (e) => {
        if (e.which === 13) {
            this.handleSubmit(e);
        }
    }

    render() {
        return (
            <Card>
                <div className="form-signup">
                    <i className="fas fa-lock"></i>
                    <div className="SignupForm" onKeyPress={this.onKeyPress}>
                        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                        <label className="sr-only" htmlFor="username">Username</label>
                        <input
                            className="form-control mb-1"
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

                    </div>
                </div>
            </Card>
        );
    }
}

export default withRouter(SignUp);
