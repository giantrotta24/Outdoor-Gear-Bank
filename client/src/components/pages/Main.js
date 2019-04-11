import React, { Component } from 'react';
import API from '../../utils/API';

class Main extends Component {
  state = {
    rentedInventory: [],
    maintInventory: [],
  }

  componentDidMount() {
    API.findAll().then(res => {
      let inventory = res.data;
      console.log(inventory);
      // eslint-disable-next-line
      inventory.map(item => {
        if (item.status === 'Out for Rent') {
          this.setState({ rentedInventory: [...this.state.rentedInventory, item] });
        } else if (item.status === 'In Maintenance') {
          this.setState({ maintInventory: [...this.state.maintInventory, item] });
        }
      })
    });
  }

  render() {
    return (

      <div>
        <div className='rent-page-cont'>
          <div className='rent-cont-header'>
            <div className='rent-cont-title'>
              Items Out for Rent
              <i className='far fa-arrow-alt-circle-right'></i>
            </div>
          </div>
          <div className='rent-cont-body'>
            {this.state.rentedInventory.length ? (
              <ul>
                {this.state.rentedInventory.map((item, key) => (
                  <div key={key}>
                    <li>Item Name: {item.name}</li>
                    <li>Item Serial: {item.serial_number}</li>
                  </div>
                ))}

              </ul>
            ) : (
                <p>No items out for rent.</p>
              )}
          </div>

        </div>
        <div className='maint-page-cont'>
          <div className='maint-cont-header'>
            <div className='maint-cont-title'>
              Items in Maintenance
              <i className='fas fa-tools'></i>
            </div>
          </div>
          <div className='maint-cont-body'>
            {this.state.maintInventory.length ? (
              <ul>
                {this.state.maintInventory.map((item, key) => (
                  <div key={key}>
                    <li>Item Name: {item.name}</li>
                    <li>Item Serial: {item.serial_number}</li>
                  </div>
                ))}
              </ul>
            ) : (
                <p>No items in maintenance.</p>
              )}
          </div>
        </div>
      </div>

    );
  }
}

export default Main;