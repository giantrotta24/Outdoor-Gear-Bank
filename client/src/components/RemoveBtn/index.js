import React, { Component } from 'react';
import './remove-style.css';
import API from '../../utils/API';

class RemoveBtn extends Component {


    removeItem = event => {
        event.preventDefault();
        
        const cartId = this.props.id;
        console.log(cartId);

        API.updateItem(cartId, { "status": "Available" }).then(this.props.updateInventory(cartId));
    }

    render() {
        return (
            <button className='btn btn-danger remove-button' onClick={this.removeItem}>Remove</button>
        );
    }
}

export default RemoveBtn;