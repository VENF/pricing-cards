import React from 'react';
import { useHistory } from 'react-router-dom';
import './scss/sucess.scss';
import SuccessI from '../Components/Illustrations/SuccessI';
const Success = () => {
    const history = useHistory();
    return (
        <div className="success-page">
            <SuccessI/>
            <h2>Operacion Exitosa</h2>
            <button onClick={() => history.push('/')} >Volver</button>
        </div>
    )
}

export default Success;
