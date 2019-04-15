import React, { Component } from 'react';
import './notification.css';

class Notification extends Component {

    render() {
        return (
            <div className='alert alert-primary'>
                {this.props.children}
            </div>
        );
    }
}

export default Notification;