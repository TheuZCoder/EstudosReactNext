'use client';

import React, { createContext, useState, useContext } from 'react';
import themes from './themes';

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

const [selectTheme, setSelectTheme] = useState(0);
const theme = themes[selectTheme];

export const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{
            theme,
        }}>
            <GlobalUpdateContext.Provider value={setGlobalState()}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);