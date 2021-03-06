import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from '../Alert';
import Card from '../Card';
import axios from 'axios';

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            showNotification: false,
            alert: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onKeyPress = (e) => {
        if (e.which === 13) {
            this.handleSubmit(e);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                });
                this.setState({
                    redirectTo: '/main'
                });
            }
        }).catch(error => {

            this.setState({
                showNotification: true,
                alert: 'Incorrect username or password'
            });
            this.delayState();
        });
    }

    delayState = () => {
        setTimeout(() => {
            this.setState({
                showNotification: false,
                alert: ''
            })
        }, 2000);
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Card>
                    <div className='form-login'>
                        <i className='fas fa-lock'></i>
                        <div className='LogInForm' onKeyPress={this.onKeyPress}>
                            <h1 className='h3 mb-3 font-weight-normal'>Log In</h1>
                            <label className='sr-only' htmlFor='username'>
                                Username
                            </label>
                            <input
                                className='form-control mb-1'
                                placeholder='Username'
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                                autoFocus
                            />
                            <label className='sr-only' htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='form-control'
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />

                            <button
                                className='btn btn-lg btn-primary btn-block mt-3'
                                onClick={this.handleSubmit}
                                type='submit'
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                    {this.state.showNotification &&
                        <Alert>
                            {this.state.alert}
                        </Alert>
                    }
                </Card>
            );
        }
    }
}

export default LogIn;