import React from 'react';
import CheckI from '../Icons/Check';
import './services.scss';

const Services = (props) => {
    const serices = [
        { amount: props.amountServices[0], service: 'PDF With Font'},
        { amount: props.amountServices[1], service: 'Day Trail'},
        { amount: props.amountServices[2], service: 'Upload Size'},
        { amount: props.amountServices[3], service: 'Help Line'},
        { amount: props.amountServices[4], service: 'Sale after service'}
    ]
    return (
        <div className="services">
            {
                serices.map((item, i) => {
                    return (
                        <div className="item-service" key={i}>
                            <p>
                                <span>
                                { item.amount === 'yes'? 
                                    <CheckI width="10" height="10" color="#6C63FF"/> 
                                    :
                                    item.amount
                                }
                                </span>
                                {item.service}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Services;
