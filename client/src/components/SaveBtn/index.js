import React, { Component } from 'react';
import API from '../../utils/API';

class SaveBtn extends Component {


    saveItem = async (event) => {
        event.preventDefault();

        const itemData = {
            name: this.props.name,
            image: this.props.image,
            serial_number: this.props.serial_number,
            id: this.props.id,
        }

        const itemId = itemData.id;


        API.updateItem(itemId, { "status": "Unavailable" }).then(this.props.grabItemData(itemData));
    }

    render() {
        return (
            <button className='btn-success btn rent-button' onClick={this.saveItem}>Rent Item</button>
        )
    }
}
export default SaveBtn;