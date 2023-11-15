import { theme } from './theme';
import React, { createContext } from 'react';

export const themeContext = createContext(theme);

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <themeContext.Provider value={theme}>{children}</themeContext.Provider>
    );
};
