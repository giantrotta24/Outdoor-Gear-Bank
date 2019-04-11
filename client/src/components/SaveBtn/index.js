import React, { Component } from 'react';
import './save-btn-styles.css';
import API from '../../utils/API';

class SaveBtn extends Component {


    saveItem = event => {
        event.preventDefault();

        const itemData = {
            name: this.props.name,
            image: this.props.image,
            serial_number: this.props.serial_number,
            id: this.props.id,
        }

        const itemId = itemData.id;
        console.log(itemId)


        API.updateItem(itemId, { 'status': 'Unavailable' }).then(this.props.grabItemData(itemData, itemId));

    }

    render() {
        return (
            <button className='btn-success btn rent-button' onClick={this.saveItem}>Rent Item</button>
        );
    }
}
export default SaveBtn;