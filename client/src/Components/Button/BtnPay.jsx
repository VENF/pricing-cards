import React, { useState } from 'react';
import './btnPay.scss';
import {loadStripe} from '@stripe/stripe-js';
import Loader from '../Loader/loader';
const stripePromise = loadStripe('pk_test_51HQGJ3ACKD1ZTJE3Ti9ORsPkQKetfHvEhOjl2QeoGzO110AIpWl7IQZvDBfsHlb7Wg3aWBCiRmg4vq18yBIxs0xO00uPTa1iEA');


const BtnPay = (props) => {
    const [loader, setLoader] = useState(false);
    const url = 'https://pricing-cards.herokuapp.com/create-checkout-session';
    const data = {
        amount: props.amount,
        serviceName: props.serviceName
    }
    const handlerPay = async (e) => {
        setLoader(true);
        const stripe = await stripePromise;
        const response = await fetch(`${url}/${data.amount}/${data.serviceName}`, { method: 'POST' })
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            console.log('error')
        }
    }

    return (
       <div className="content-btn">
            <button className="btn-pay" role="link" onClick={handlerPay}>
                { loader? <Loader/>: <span>Pay</span>}
            </button>
       </div>
    )
}

export default BtnPay;
