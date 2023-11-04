import React, { useState,useEffect } from 'react'
import { useContext } from 'react';

const AuthContext =React.createContext({
    items: [],
    price: 0,
    token: '',
    email: "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{},

    addItem: (item)=>{},
    removeItem: (id) =>{},
    setItem: (data)=>{},
    quantity: 0,
    updateItem: (update)=>{},
    //clearCart: ()=>{},
})


export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token');
    const initialEmail=localStorage.getItem("email");
    //const initialQuantity=localStorage.getItem("quantity")
    const initialPrice=localStorage.getItem("price");

    const [token, setToken]=useState(initialToken);
    const [email,setEmail]=useState(initialEmail);

    const [items,setItems]=useState([]);
    const authCtx=useContext(AuthContext);
     
    const [price,setPrice]=useState(initialPrice);
    const [quantity,setQuantity]=useState(0);

    const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

    const userIsLoggedIn=!!token;

    useEffect(() => {
        if (isLoggedIn) {
          localStorage.setItem("token", token);
          localStorage.setItem("email", email);
          //localStorage.setItem("quantity",quantity)
          localStorage.setItem("price",price);

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
       setPrice(props.price);
       //setItems((prev)=>[...prev,props])

       const existingItem = items.find((cartItem) => cartItem._id === props._id);

    if (existingItem) {
      const updatedItems = items.map((cartItem) => {
        if (cartItem._id === props._id) {
          return {
            ...cartItem,
            quantity: Number(cartItem.quantity) +1,
            price: cartItem.price + props.price,
          };
        }
        return cartItem;
      });

      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, props]);
    }
    console.log("items",items);

    }
     const removeItemHandler=(id)=>{
        //setQuantity(quantity-1);
        console.log("id",id);
        const arr=items.filter((prv)=>prv._id!==id)
        setItems(arr);
        //setItems((prev)=>[...prev,arr]);
        console.log("id price",id.price);
        //const currentPrice=authCtx.price-id.price
        //setPrice(currentPrice);
    }
    const setItemHandler=(props)=>{
        setItems(props);
    }
    const updateItemHandler=(item)=>{
       console.log("updateItem",item);
       

    }

    console.log("context Item",items);
    const contextValue={
        token: token,
        email: email,
        //isLoggedIn: userIsLoggedIn,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,

        price: price,
        items: items,
        quantity: quantity,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        setItem: setItemHandler,
        updateItem: updateItemHandler,
        //clearCart: clearCartHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;
