import React from 'react';
import './customer-form.css';

const CustomerForm = props => {
    return (
        <div className='container'>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>New Customer Info</label>
                    <input
                        value={props.first_name}
                        onChange={props.handleInputChange}
                        name='first_name'
                        type='text'
                        className='form-control'
                        placeholder='First Name, ex. John'
                        id='first_name'
                    />
                    <input
                        value={props.last_name}
                        onChange={props.handleInputChange}
                        name='last_name'
                        type='text'
                        className='form-control'
                        placeholder='Last Name, ex. Davidson'
                        id='last_name'
                    />
                    <input
                        value={props.phone_number}
                        onChange={props.handleInputChange}
                        name='phone_number'
                        type='text'
                        className='form-control'
                        placeholder='Phone Number, ex. 2165550909'
                        id='phone_number'
                    />
                    <input
                        value={props.member_number}
                        onChange={props.handleInputChange}
                        name='member_number'
                        type='text'
                        className='form-control'
                        placeholder='Member Number, ex. 20759000'
                        id='member_number'
                    />
                    <input
                        value={props.email}
                        onChange={props.handleInputChange}
                        name='email'
                        type='text'
                        className='form-control'
                        placeholder='Email Address, ex. sally@gmail.com'
                        id='email'
                    />
                    <button type='submit' onClick={props.handleFormSubmit} className='btn btn-primary float-right mt-2'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CustomerForm;