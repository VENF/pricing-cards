import React, { useContext } from 'react';
import { Theme } from '../../Context/Theme';
import Prices from '../Prices/Prices';
import Services from '../Services/Services';
import BtnPay from '../Button/BtnPay';
import './card.scss';

const Card = (props) => {
    const theme = useContext(Theme)
    return (
        <div className={`card card_${theme.mode? 'dark': 'light'}`}>
            <div className="animate">
                {props.children}
            </div>
            <div className="title">
                <p> { props.title } </p>
            </div>
            <Prices amount={props.price}/>
            <Services amountServices={props.amountServices}/>
            <BtnPay amount={props.price} serviceName={ props.title }/>
        </div>
    )
}

export default Card;
