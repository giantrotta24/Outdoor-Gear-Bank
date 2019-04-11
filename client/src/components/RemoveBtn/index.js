import React, { Component } from 'react';
import './remove-style.css';
import API from '../../utils/API';

class RemoveBtn extends Component {


    removeItem = event => {
        event.preventDefault();

        const itemData = {
            id: this.props.id
        }

        const itemId = itemData.id;
        console.log(itemId);

        API.updateItem(itemId, { "status" : "Available" }).then(this.props.updateInventory(itemId));
    }

    render() {
        return (
            <button className='btn btn-danger remove-button' onClick={this.removeItem}>Remove</button>
        );
    }
}

export default RemoveBtn; 