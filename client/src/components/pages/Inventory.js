import React, { Component } from 'react';
import { FormInput, FormSelect, FormBtn } from '../Form';
import { Container } from '../Grid';
import Notification from '../Notification';
import API from '../../utils/API';

class Inventory extends Component {

  state = {
    inventory: [],
    itemName: '',
    category: '',
    serialNumber: '',
    imageURL: '',
    seletedOption: '',
    showNotification: false,
    options: [
      { label: 'Snowshoes', value: 'Snowshoes' },
      { label: 'Stoves', value: 'Stoves' },
      { label: 'Tents', value: 'Tents' },
      { label: 'Sleeping Bags', value: 'Sleeping Bags' },
      { label: 'Sleeping Pads', value: 'Sleeping Pads' },
      { label: 'Backpacks', value: 'Backpacks' },
      { label: 'Accessories', value: 'Accessories' }
    ],
    state: '',
    showNotification: false,
    notification: '',
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.itemName && this.state.category &&
      this.state.serialNumber && this.state.imageURL) {
      this.updateInv();
    }
    else {
      this.setState({
        showNotification: true,
        notification: 'All Input Fields Required'
      })
      this.delayState();
    }
  };

  delayNotification = () => {
    setTimeout(() => {
      this.setState({
        showNotification: false,
        alert: ''
      })
    }, 2000);
  }

  updateInv = () => {
    let newItem = {
      name: this.state.itemName,
      category: this.state.category,
      serial_number: this.state.serialNumber,
      image: this.state.imageURL,
      condition: 'New',
      number_of_times_rented: 0
    };
    API.addItem(newItem)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            showNotification: true,
            alert: 'Inventory Update Successful!',
            state: this.state.state,
            itemName: '',
            category: '',
            serialNumber: '',
            imageURL: '',
            seletedOption: '',
            showNotification: true,
            notification: 'Inventory Update Successful!'
          });
          this.delayState();
        }
      })
      .catch(err => console.log(err))
  };

  delayState = () => {
    setTimeout(() => {
      this.setState({
        showNotification: false,
        notification: ''
      });
    }, 2000);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.setState({ category: selectedOption.value })
  };

  componentDidMount() {
    API.findCategories().then(res => {
      this.setState({
        inventory: res.data
      });
    });
  };

  render() {
    return (
      <div className='invContainer'>
        <Container>
          {this.state.showNotification &&
            <Notification>
              {this.state.notification}
            </Notification>
          }
          <h3 className='mt-5 mb-1'>Add Inventory</h3>
          <form>
            <div className='form-group'>
              <label htmlFor='item-name'>Name (required):</label>
              <FormInput
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name='itemName'
                placeholder='Name of Item'
                required='required'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='item-category'>Category (required):</label>
              <FormSelect
                onChange={this.handleChange}
                value={this.state.selectedOption}
                options={this.state.options}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='item-serialNumber'>Item Serial Number (required):</label>
              <FormInput
                value={this.state.serialNumber}
                onChange={this.handleInputChange}
                name='serialNumber'
                placeholder='Item Serial Number'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='item-imageURL'>Item Image URL (required):</label>
              <FormInput
                value={this.state.imageURL}
                onChange={this.handleInputChange}
                name='imageURL'
                placeholder='Item Image URL'
              />
            </div>
            <FormBtn
              onClick={this.handleFormSubmit}>
              Submit
                </FormBtn>
          </form>
        </Container>
      </div>
    )
  }
}

export default Inventory;