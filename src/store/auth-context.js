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
    setItem: (data)=>{},
    quantity: '',
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

    const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

    const userIsLoggedIn=!!token;

    useEffect(() => {
        if (isLoggedIn) {
          localStorage.setItem("token", token);
          localStorage.setItem("email", email);
          localStorage.setItem("quantity",quantity)

        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
          localStorage.removeItem("quantity");
        }
      }, [isLoggedIn, token, email,quantity]);


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
    const addItemHandler=(props)=>{
       console.log("addItemHandler",props);
       //setItems(...prv,props);
       setItems((prev)=>[...prev,props])
       setQuantity(quantity+1);
    }
    const removeItemHandler=(id)=>{
        //setQuantity(quantity-1);
        const arr=items.filter((prv)=>prv._id!==id)
        setItems(arr);
      
        
    }
    const setItemHandler=(props)=>{
        setItems(props);
    }
    console.log("context Item",items);
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
        setItem: setItemHandler,
        //clearCart: clearCartHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;
