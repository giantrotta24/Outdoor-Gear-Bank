import React, { Component } from 'react';
import { FormInput, FormSelect, FormBtn } from '../Form';
import API from '../../utils/API';

class Inventory extends Component {

  state = {
    inventory: [],
    itemName: '',
    category: '',
    serialNumber: '',
    imageURL: '',
    seletedOption: '',
    options: [
      { label: 'Snowshoes', value: 'Snowshoes' },
      { label: 'Stoves', value: 'Stoves' },
      { label: 'Tents', value: 'Tents' },
      { label: 'Sleeping Bags', value: 'Sleeping Bags' },
      { label: 'Accessories', vale: 'Accessories' }
    ],
    state: ''
  };



  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.itemName && this.state.category &&
      this.state.serialNumber && this.state.imageURL) {
      this.updateInv();
    }
    else {
      alert('All Input Fields Required');
    }
  };

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
          alert('Inventory Update Successful!');
          this.setState({
            state: this.state.state,
            itemName: '',
            category: '',
            serialNumber: '',
            imageURL: '',
            seletedOption: ''
          });
        }
      })
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.setState({ category: selectedOption.value })
  }

  componentDidMount() {
    API.findCategories().then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    return (
      <div className='container bg-light border mt-5'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
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
                <label htmlFor='item-imageURL'>Item Imagae URL (required):</label>
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
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
    )
  }
}

export default Inventory;