import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';

const Header = () => {
    const login = () => {
        auth?.setUser({ name: 'sepehr' });
    };
    useEffect(() => {
        login();
    }, []);
    const auth = useContext(AuthContext);
    return <div>{auth && auth.user?.name}</div>;
};

export default Header;
