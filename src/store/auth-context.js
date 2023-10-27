import React, { useState,useEffect } from 'react'

const AuthContext =React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})


export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token');
    const [token, setToken]=useState(initialToken);
    //const [isLoggedIn,setisLoggedIn]=useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

    const userIsLoggedIn=!!token;

    useEffect(() => {
        if (isLoggedIn) {
          localStorage.setItem("token", token);
          //localStorage.setItem("email", email);
        } else {
          localStorage.removeItem("token");
          //localStorage.removeItem("email");
        }
      }, [isLoggedIn, token]);


    const loginHandler=(token)=>{
        console.log(token);
        setToken(token);
        setIsLoggedIn(true);
        //localStorage.setItem('token',token);


    }
    const logoutHandler=()=>{
       setToken(null);
       setIsLoggedIn(false);
    }
    console.log(isLoggedIn);
    
    const contextValue={
        token: token,
        //isLoggedIn: userIsLoggedIn,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;
