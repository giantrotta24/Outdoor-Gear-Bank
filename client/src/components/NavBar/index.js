import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';

class NavBar extends Component {
    constructor() {
        super()

        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        console.log('logging out');
        axios.post('/user/logout').then(response => {
            console.log(response.data);
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                });

            }

        }).catch(error => {
            console.log('Logout error');
        });
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ');
        console.log(this.props);

            return (
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    {loggedIn ? (
                        <Link to="/main" className="navbar-brand">
                            <i className="fas fa-mountain"></i> Outdoor Gear Bank
                    </Link>
                    ) : (
                            <Link to="/" className="navbar-brand">
                                <i className="fas fa-mountain"></i> Outdoor Gear Bank
                    </Link>
                        )}
                    <ul className="navbar-nav ml-auto">
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link className="nav-item btn btn-sm btn-secondary mr-1" onClick={this.logout}>
                                    Logout
                            </Link>
                                <Link to="/rent" className="nav-item btn btn-sm btn-secondary mr-1" >
                                    Rent
                            </Link>
                                <Link to="/return" className="nav-item btn btn-sm btn-secondary mr-1" >
                                    Return
                            </Link>
                                <Link to="/maintenance" className="nav-item btn btn-sm btn-secondary mr-1" >
                                    Maintenance
                            </Link>
                                <Link to="/inventory" className="nav-item btn btn-sm btn-secondary mr-1" >
                                    Add Inventory
                            </Link>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/login" className="nav-item btn btn-sm btn-secondary mr-1" >
                                        Log-In
                            </Link>
                                    <Link to="/signup" className="nav-item btn btn-sm btn-secondary mr-1" >
                                        Sign-Up
                            </Link>
                                </section>
                            )}
                    </ul>
                </nav>
            );
        }
    }

export default NavBar;