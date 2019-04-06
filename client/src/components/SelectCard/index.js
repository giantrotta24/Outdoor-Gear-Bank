import React from 'react';
import Select from 'react-select';
import './style.css';

const SelectCard = props => {
    return (
        <div className="container">
            <h3>Search Department</h3>
            <Select
                className="form-control"
                onChange={props.handleChange}
                value={props.selectedOption}
                options={props.options}
            />
        </div>
    )
}

export default SelectCard;