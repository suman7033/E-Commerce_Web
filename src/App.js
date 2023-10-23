import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React,{useContext, useState,Redirect} from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
//import AuthContext from "./store/auth-context";


export default function App(){
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
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
   
  const addToCart=(data)=>{
    console.log(data)
    setCart([...cart,{...data,quantity: 1}])
  }
  //const authCtx=useContext(AuthContext);
   
  return (
    <>
      <Router>
      <Navbar count={cart.length} setShowCart={setShowCart}>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          
          <Route path='/profile'>
           <Route path="/store" element={<ProductList product={product} addToCart={addToCart}/>}/>
           <Redirect to="/login" element={<Login/>}/>
          </Route>           
        </Routes>
      {/* {
        showCart ? 
        <CartList cart={cart}/>:
      <ProductList product={product} addToCart={addToCart}/>
      } */}
      </Navbar>
      </Router>
    </>
     
  )
}

