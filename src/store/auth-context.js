import React, { useState,useEffect } from 'react'

const AuthContext =React.createContext({
    token: '',
    email: "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})


export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token');
    const initialEmail=localStorage.getItem("email");
    const [token, setToken]=useState(initialToken);
    const [email,setEmail]=useState(initialEmail);
    //const [isLoggedIn,setisLoggedIn]=useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

    const userIsLoggedIn=!!token;

    useEffect(() => {
        if (isLoggedIn) {
          localStorage.setItem("token", token);
          localStorage.setItem("email", email);

        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
        }
      }, [isLoggedIn, token, email]);


    const loginHandler=(token,email)=>{
        //console.log(token);
        setToken(token);
        setIsLoggedIn(true);
        //localStorage.setItem('token',token);
        setEmail(email);


    }
    const logoutHandler=()=>{
       setToken(null);
       //setShowCart(false);
       setIsLoggedIn(false);
    }
    console.log(isLoggedIn);
    
    const contextValue={
        token: token,
        email: email,
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
