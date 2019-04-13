import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const NotificationContainer = props => {
    return (
        ReactDOM.createPortal(
            props.children,
            document.querySelector('#modal')
        )
    );
}

const NotificationMessage = () => {
    return (
        <div>The world says hello!</div>
    );
}

class Notification extends Component {
    render() {
        return (
            <Fragment>
                <NotificationContainer>
                    <NotificationMessage />
                </NotificationContainer>
            </Fragment>
        )
    }
}

export default Notification;