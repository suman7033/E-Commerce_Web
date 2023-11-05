import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import React,{useState,useContext, Suspense, useEffect} from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Home from './components/Home';
import About from "./components/About";
import Login from './components/Login';
import AuthContext from "./store/auth-context";
import UserProfile from "./components/UserProfile";
import axios from "axios";

const App=()=> {
  const [product,setProduct] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 1,
      },
      {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 2,
      },
      {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 3,
      },
      {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 4,
        },
        {
          title: 'Blue Color',
          price: 100, 
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 
          quantity: 5,
          },
        { 
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 6,
        }
    ])
  //const [cart,setCart]=useState([]);
  const authCtx=useContext(AuthContext);
  //console.log("auth.email",authCtx.email);

  //const ChangeEmail=authCtx.email.replace('@','').replace('.','')
  let ChangeEmail;
   if(authCtx.email){
     ChangeEmail=authCtx.email.replace('@','').replace('.','')
   }

  const addToCart=(data)=>{
    //console.log("data",data);
    axios.post(`https://crudcrud.com/api/2dd1b7bef9ec451daeccae894c538c9e/${ChangeEmail}`,data)
        .then((res)=>{
            console.log("response_data after post",res.data);
            authCtx.addItem(res.data);
        })
        .catch((error)=>{
            alert("Error",error)
        })
    //setCart([...cart,{...data,quantity: 1}])
  }

  useEffect(()=>{
    if(!authCtx.isLoggedIn){
      //setCart([])
      authCtx.setItem([])
    }else{
    axios.get(`https://crudcrud.com/api/2dd1b7bef9ec451daeccae894c538c9e/${ChangeEmail}`)
    .then((res)=>{
      authCtx.setItem(res.data);
      console.log("usefeect",res.data);
      //authCtx.quantity
      //console.log("get response",res.data);
      //setCart(res.data);
      
    })
  }
  },[authCtx.isLoggedIn]);

  return (
  <>
    <BrowserRouter>
      <Navbar count={authCtx.quantity}/>
      <Suspense fallback={<h1>Loading...</h1>}>
       <Routes>
          <Route path="/" element={<Home/>}/>
            <Route
              path="/store"
              element={authCtx.isLoggedIn ? <ProductList product={product} addToCart={addToCart}/> : 
              <Navigate to="/login"/>}
            />
            <Route
              path="/about"
              element={authCtx.isLoggedIn ? <About/> : <Navigate to="/login"/>}
            />
            <Route
              path="/login"
              element={!authCtx.isLoggedIn ? <Login/> :  <Navigate to='/store'/>}
            />
          <Route path="/profile" element={authCtx.isLoggedIn ? <UserProfile/> : <Navigate to='/login'/>}/>

          <Route path="/cart" element={authCtx.isLoggedIn ? <CartList cart={authCtx.items}/> :
          //  <ProductList product={product} addToCart={addToCart}/>}/>
          <Login/>}/>
        </Routes>
       </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App