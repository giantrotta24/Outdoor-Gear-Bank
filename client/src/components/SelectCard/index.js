import React, { Component } from 'react';
import Select from 'react-select';
import './style.css';


class SelectCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        this.grabItems(selectedOption);
    }

    grabItems = selectedOption => {
        const arr = [];
        arr.push(selectedOption);
        arr.map(opt => {
            console.log('this worked', opt.value);
        })
    }


    render() {
        const { selectedOption } = this.state;
        const props = this.props
        return (
            <div className="container">
                <h3>Search Department</h3>
                <Select
                    className="form-control"
                    onChange={this.handleChange}
                    value={selectedOption}
                    options={props.options}
                />
            </div>
        )
    }
}


export default SelectCard;