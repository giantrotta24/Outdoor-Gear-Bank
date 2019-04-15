import React, { Component } from 'react';
import './alert-style.css';

class Alert extends Component {
    render() {
        return (
            <div className='alert alert-danger' >
                {this.props.children}
            </div>
        );
    }
};

export default Alert;


