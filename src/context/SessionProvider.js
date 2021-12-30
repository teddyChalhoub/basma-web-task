import React, { useState } from 'react'
import SessionContext from './SessionContext'

const SessionProvider = ({children}) => {

    const [toggleLan, setToggleLan] = useState(false);

    const handleToggleEn = ()=>{
        setToggleLan(false);
    }

    const handleToggleAr= ()=>{
        setToggleLan(true);
    }

    const context = {state:{toggleLan},actions:{handleToggleEn,handleToggleAr}}
    return (
        <SessionContext.Provider value={context}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider
