import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Alert from '../NotificationContainer';
import Card from '../Card';
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
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

    handleSubmit(event) {
        event.preventDefault();
        //request to server here (add new username/password)
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password,
        }).then(response => {
            if (response.data.error) {
                this.setState({
                    showNotification: true,
                    alert: 'Sign up failed'
                });
                this.delayState();
            } else {
                this.reroute();
            }
        }).catch(error => {
            console.log(error);
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
                <div className='form-signup'>
                    <i className='fas fa-lock'></i>
                    <div className='SignupForm' onKeyPress={this.onKeyPress}>
                        <h1 className='h3 mb-3 font-weight-normal'>Sign Up</h1>
                        <label className='sr-only' htmlFor='username'>Username</label>
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
                        <label className='sr-only' htmlFor='password'>Password</label>
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
                        >Sign up</button>

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

export default withRouter(SignUp);
