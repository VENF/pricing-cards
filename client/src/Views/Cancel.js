import React from 'react';
import './scss/cancel.scss';
import CancelI from '../Components/Illustrations/CancelI';
import { useHistory } from 'react-router-dom';
const Cancel = () => {
    const history = useHistory();
    return (
        <div className="cancel-page">
            <CancelI/>
            <h2>Operacion Cancelada</h2>
            <button onClick={() => history.push('/')} >Volver</button>
        </div>
    )
}

export default Cancel;
