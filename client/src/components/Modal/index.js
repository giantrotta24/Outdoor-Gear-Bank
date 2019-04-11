import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './modal-style.css';

const ModalTrigger = ({ onOpen, buttonRef }) => {
    return (
        <button onClick={onOpen} ref={buttonRef} className='c-btnz'>
            <i className='fas fa-shopping-cart'></i>Item Cart
        </button>
    );
};

const ModalContent = ({ onClose, content, onKeyDown, modalRef, onClickAway, buttonRef }) => {
    return ReactDOM.createPortal(
        <div
            className='c-modal-cover'
            onKeyDown={onKeyDown}
            onClick={onClickAway}
            aria-modal='true'
        >
            <div className='c-modal' ref={modalRef}>
                <button ref={buttonRef} className='c-modal__close' aria-label='Close Modal' onClick={onClose}>
                    <span className='u-hide-visually'>Close</span>
                    <svg className='c-modal__close-icon' viewBox='0 0 40 40'><path d='M 10,10 L 30,30 M 30,10 L 10,30'></path></svg>
                </button>
                <div className='c-modal__body'>
                    <div className='c-modal-title'><i className='fas fa-shopping-cart'></i>Item Cart</div>
                    <div className='modal-container'>
                        {content}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};


class Modal extends Component {
    state = { isOpen: false };

    onOpen = () => {
        this.setState({ isOpen: true }, () => {
            this.closeButtonNode.focus();
        });
        this.toggleScrollLock();
    }

    onClose = () => {
        this.setState({ isOpen: false });
        this.openButtonNode.focus();
        this.toggleScrollLock();
    }

    onKeyDown = (event) => {
        return event.keyCode === 27 && this.onClose();
    }

    onClickAway = (e) => {
        if (this.modalNode && this.modalNode.contains(e.target)) return;
        this.onClose();
    };

    toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');


    render() {
        const { isOpen } = this.state;
        const { children } = this.props;
        return (
            <Fragment>
                <ModalTrigger
                    buttonRef={n => this.openButtonNode = n}
                    onOpen={this.onOpen}
                />
                {isOpen &&
                    <ModalContent
                        buttonRef={n => this.closeButtonNode = n}
                        modalRef={n => this.modalNode = n}
                        content={children}
                        onClickAway={this.onClickAway}
                        onClose={this.onClose}
                        onKeyDown={this.onKeyDown}
                    />
                }
            </Fragment>
        );
    }
};

export default Modal;