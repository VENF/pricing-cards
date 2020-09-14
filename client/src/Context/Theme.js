import React, { useState } from 'react';
export const Theme = React.createContext({});


const ThemeContext = (props) =>{
    const [mode, setMode] = useState(false);

    //specifications for the theme
    const themeMode = {
        backgroundColor: mode? '#080412': '#E9E9E9',
        color: mode? '#E9E9E9': '#080412'
    }

    return (
        <Theme.Provider value={{mode, setMode, themeMode}}>
            {props.children}
        </Theme.Provider>
    )
}

export default ThemeContext;