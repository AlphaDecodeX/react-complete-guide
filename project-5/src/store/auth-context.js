import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: 0,
    onLogout: (email, password) => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation == 1) {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        console.log("LogoutHandler called");
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        console.log("LoginHandler called")
        localStorage.setItem('isLoggedIn', 1);
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogOut: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>

}

export default AuthContext;