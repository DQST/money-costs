import React from 'react';
import Store from 'store';


export const StoreContext = React.createContext(null);

export const StoreProvider = ({children}) => (
    <StoreContext.Provider value={new Store()}>
        {children}
    </StoreContext.Provider>
);
