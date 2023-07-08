import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { },
    mode: 'light',
    toggleMode: () => { }
});



export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [mode, setMode] = useState("light");

    useEffect(() => {
        const userLoginInfo = localStorage.getItem("isLoggedIn");
        if (userLoginInfo === '1') {
            setIsLoggedIn(true)
        }
    }, [])
    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false)
    }

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#283149";
            document.body.style.color = "#fff";
            return;
        }
        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
            return;
        }
        console.log(mode);
    };
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler,
            mode,
            toggleMode
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
