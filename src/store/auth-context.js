import React, { useState,useEffect } from 'react'

const AuthContext =React.createContext({
    items: [],
    totalAmount: 0,
    token: '',
    email: "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{},

    addItem: (item)=>{},
    removeItem: (id) =>{},
    //clearCart: ()=>{},
})


export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token');
    const initialEmail=localStorage.getItem("email");
    const [token, setToken]=useState(initialToken);
    const [email,setEmail]=useState(initialEmail);

    const [items,setItems]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);
    const [quantity,setQuantity]=useState(0)

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
    //console.log(isLoggedIn);
    
    const addItemHandler=(items)=>{
       console.log("addItemHandler",items);
    }
    const removeItemHandler=()=>{
        

    }
    // const clearCartHandler=()=>{

    // }

    const contextValue={
        token: token,
        email: email,
        //isLoggedIn: userIsLoggedIn,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,

        totalAmount: totalAmount,
        items: items,
        quantity: quantity,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        //clearCart: clearCartHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;
