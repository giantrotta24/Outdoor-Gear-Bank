import React from 'react';
import './card-style.css';

const Card = props => {
    return (
        <div className='login-card'>
            <div className='card-body'>
                {props.children}
            </div>
        </div>
    );
}

export default Card;