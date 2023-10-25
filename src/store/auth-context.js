import React, { useState } from 'react'

const AuthContext =React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token');
    const [token, setToken]=useState(initialToken);

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        console.log(token);
        setToken(token);
        localStorage.setItem('token',token);

    }
    const logoutHandler=()=>{
       setToken(null);
    }
    const contextValue={
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;
