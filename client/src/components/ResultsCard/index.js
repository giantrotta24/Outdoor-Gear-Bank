import React from 'react';
import './results-card-style.css';

const ResultsCard = ({children}) => {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>Items</div>
                {children}
            </div>
        </div>
    );
}

export default ResultsCard;