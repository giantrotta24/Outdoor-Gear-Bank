import React, { Component } from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom';
import './navbar-style.css';
import axios from 'axios';

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false
        }
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.logout = this.logout.bind(this);
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        });
        this.renderRedirect();
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    };

    logout(event) {
        event.preventDefault();
        axios.post('/user/logout').then(response => {
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null,
                });
                this.setRedirect();

            }

        }).catch(error => {
            console.log('Logout error');
        });
    };

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
                {loggedIn ? (
                    <Link to='/main' className='navbar-brand' >
                        <i className='fas fa-mountain'></i> Outdoor Gear Bank
                    </Link>
                ) : (
                        <Link to='/' className='navbar-brand' >
                            <i className='fas fa-mountain'></i> Outdoor Gear Bank
                    </Link>
                    )}
                {loggedIn &&
                    <span className='text-center'>Welcome {this.props.username}!</span>
                }
                <ul className='navbar-nav ml-auto'>
                    {loggedIn ? (
                        <section className='navbar-section'>
                            <NavLink to='/' className='nav-item btn mr-1' onClick={this.logout}>
                                Logout
                            </NavLink>
                            <NavLink to='/rent' className='nav-item btn mr-1' activeClassName='nav-item btn mr-1 selected'>
                                Rent
                            </NavLink>
                            <NavLink to='/return' className='nav-item btn mr-1' activeClassName='nav-item btn mr-1 selected'>
                                Return
                            </NavLink>
                            <NavLink to='/maintenance' className='nav-item btn mr-1' activeClassName='nav-item btn mr-1 selected'>
                                Maintenance
                            </NavLink>
                            <NavLink to='/inventory' className='nav-item btn mr-1' activeClassName='nav-item btn mr-1 selected'>
                                Add Inventory
                            </NavLink>
                        </section>
                    ) : (
                            <section className='navbar-section'>
                                <NavLink to='/login' className='nav-item btn mr-1' activeClassName='nav-item btn mr-1 selected'>
                                    Log-In
                                </NavLink>
                                <NavLink to='/signup' className='nav-item btn mr-1' activeClassName='nav-item btn mr-1 selected'>
                                    Sign-Up
                                </NavLink>
                            </section>
                        )}
                </ul>
            </nav>
        );
    }
};

export default NavBar;