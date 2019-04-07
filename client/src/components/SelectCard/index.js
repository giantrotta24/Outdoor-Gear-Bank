import React, { Component } from 'react';
import Select from 'react-select';
import ResultsCard from '../ResultsCard';
import ReactImageMagnify from 'react-image-magnify';
import API from '../../utils/API';
import './select-card-style.css';


class SelectCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: null,
            inventory: [],
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.grabItems(selectedOption)

    }

    grabItems = selectedOption => {
        const arr = [];
        arr.push(selectedOption);
        arr.map(opt => {
            let apiQuery = opt.value;
            API.findItemsByCategory(apiQuery)
                .then(res => {
                    this.setState({ inventory: res.data });
                    console.log(this.state.inventory);
                });
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
                                        <div className='col-md-2'>
                                            <img src={item.image} alt={`${item.name} thumbnail`} className='result-image' />
                                        </div>
                                        <div className='col-sm-12 col-md-6' >
                                            <p className='font-italic item-title'>{item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <p className='no-text'><strong>No items to display </strong> </p>
                        )}
                </ResultsCard>
            </div>
        )
    }
}


export default SelectCard;