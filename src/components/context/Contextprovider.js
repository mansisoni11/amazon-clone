import React, { createContext, useState } from 'react'

export const Logincontext = createContext(null);

const Contextprovider = ({ children }) => {

    const [account, setAccount] = useState("");

    return (
        <div>
            <Logincontext.Provider value={{ account, setAccount }}>
                {children}
            </Logincontext.Provider>
        </div>
    )
}

export default Contextprovider;