import React, { Component } from 'react';

class SaveBtn extends Component {

    constructor(props) {
        super(props)

    }


    saveItem = event => {
        event.preventDefault();

        const itemData = {
            name: this.props.name,
            comments: this.props.comments,
            condition: this.props.condition,
            image: this.props.image,
            serial_number: this.props.serial_number,
            id: this.props.id,
            status: this.props.status,
        }

        this.props.grabItemData(itemData);

        
    }

    render() {
        return (
            <button className='btn-success btn rent-button' onClick={this.saveItem}>Rent Item</button>
        )
    }
}
export default SaveBtn;