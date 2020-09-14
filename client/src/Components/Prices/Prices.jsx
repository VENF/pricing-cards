import React from 'react';
import './prices.scss';

const Prices = ({amount}) => {
    return (
        <div className="prices">
            <div className="dollar">
                <p>$</p>
            </div>
            <div className="amount">
                <p> { amount } </p>
                <div className="date">
                    /Month
                </div>
            </div>
        </div>
    )
}

export default Prices;
