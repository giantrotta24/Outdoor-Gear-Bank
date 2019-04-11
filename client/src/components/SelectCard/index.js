import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import ResultsCard from '../ResultsCard';
import SaveBtn from '../SaveBtn';
import RemoveBtn from '../RemoveBtn';
import API from '../../utils/API';
import './select-card-style.css';


class SelectCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: null,
            inventory: [],
            cart: [],
        }

    }

    //for modal testing and styling
    // componentDidMount () {
    //     API.findAll().then(res => {
    //         this.setState({ cart: res.data })
    //     })
    // }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.grabItems(selectedOption)

    }

    grabItems = selectedOption => {
        const arr = [];
        arr.push(selectedOption);
        // eslint-disable-next-line
        arr.map(opt => {
            let apiQuery = opt.value;
            API.findItemsByCategory(apiQuery)
                .then(res => {
                    this.setState({ inventory: res.data });
                    console.log(this.state.inventory);
                });
        });
    }

    grabItemData = (itemData, itemId) => {
        this.setState({ cart: [...this.state.cart, itemData] });
        // console.log(this.state.cart);
        let index = 0;

        for (let i = 0; i < this.state.inventory.length; i++) {
            if (this.state.inventory[i]._id === itemId) {
                index = i;
            }
        }

        console.log('first one', this.state.inventory.slice(0, index));
        console.log('second one', this.state.inventory.slice(index + 1));
        this.setState({
            inventory: [
                ...this.state.inventory.slice(0, index),
                { ...this.state.inventory[index], status: 'Unavailable' },
                ...this.state.inventory.slice(index + 1)
            ]
        });
    }

    updateInventory = itemId => {
        console.log(itemId);
        let index = 0;
        for (let i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i]._id === itemId) {
                index = i;
            }
        }

        this.setState({
            cart: [
                ...this.state.cart.slice(0, index),
                ...this.state.cart.slice(index + 1)
            ]
        });

        for (let i = 0; i < this.state.inventory.length; i++) {
            if (this.state.inventory[i]._id === itemId) {
                index = i;
            }
        }

        console.log('first one', this.state.inventory.slice(0, index));
        console.log('second one', this.state.inventory.slice(index + 1));
        this.setState({
            inventory: [
                ...this.state.inventory.slice(0, index),
                { ...this.state.inventory[index], status: 'Available' },
                ...this.state.inventory.slice(index + 1)
            ]
        });

    }

    render() {

        const { selectedOption } = this.state;
        const props = this.props
        return (
            <div className="rent-container">
                <h3>Search Department</h3>
                <Select
                    className="form-control"
                    onChange={this.handleChange}
                    value={selectedOption}
                    options={props.options}
                />
                <ResultsCard>
                    {this.state.inventory.length ? (
                        <div className='small-card'>
                            {this.state.inventory.map((item, key) => (
                                <div className='small-card-body' key={key}>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <img src={item.image} alt={`${item.name} thumbnail`} className='result-image' />
                                            <p className='font-italic item-title'>{item.name}</p>
                                            <p className='item-title'>Comments: {item.commemnts}</p>
                                        </div>
                                        <div className='col-md-6' >
                                            {item.status === 'Available' ? (
                                                <div className='col'>
                                                    <SaveBtn
                                                        name={item.name}
                                                        image={item.image}
                                                        serial_number={item.serial_number}
                                                        id={item._id}
                                                        grabItemData={this.grabItemData}
                                                    />
                                                </div>
                                            ) : (
                                                    <div className='col'>
                                                        <p className='unavailable'><strong> Item unavailable </strong> </p>
                                                    </div>
                                                )}

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <p className='no-text'><strong>No items to display </strong> </p>
                        )}
                    <div>
                        <Modal>
                            {this.state.cart.length ? (
                                <div className="cart-body">
                                    {this.state.cart.map((x, key) => (
                                        <div className="small-cart-body" key={key}>
                                            <div className="row">
                                                <div className='col'>
                                                    <p className='font-italic cart-title'>{x.name}</p>
                                                    <img src={x.image} alt={`${x.name} thumbnail`} className='cart-image' />
                                                    <RemoveBtn
                                                        id={x.id}
                                                        updateInventory={this.updateInventory}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <Link to="/checkout" className="btn btn-success checkout-button">
                                        Checkout
                                    </Link>
                                </div>
                            ) : (
                                    <p>No items in the cart</p>
                                )}
                        </Modal>
                        <Link to="/checkout" className="btn btn-success checkout-button">
                            Checkout
                        </Link>
                    </div>
                </ResultsCard>
            </div>
        )
    }
}

export default SelectCard;

