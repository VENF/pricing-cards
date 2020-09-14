import React,{ useContext } from 'react';
import { Theme } from '../../Context/Theme';

/*Components*/
import Moon from '../Icons/Moon';
import Sun from '../Icons/Sun';
/*Components*/

import './btnSwitch.scss';

const SwitchMode = () => {
    const theme = useContext(Theme);
    return (
        <button 
            data-testid="button-theme-mode"
            dark-theme={theme.mode.toString()}
            className="btn-mode" onClick={() => theme.mode? theme.setMode(false): theme.setMode(true)}
            >
            <div className={`ligth ${theme.mode? 'await': 'active'}`}>
                <Sun width="25" height="25" color="#6C63FF"/>
            </div>
            <div className={`dark ${theme.mode? 'active': 'await'}`}>
                <Moon width="25" height="25" color="#a5a5a5"/>
            </div>
        </button>
    )
}

export default SwitchMode;
