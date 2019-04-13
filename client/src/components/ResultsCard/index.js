import React from 'react';
import './results-card-style.css';

const ResultsCard = ({children}) => {
    return (
        <div className='result-container'>
            <div className='card'>
                <div className='card-header'>Items</div>
                {children}
            </div>
        </div>
    );
}

export default ResultsCard;