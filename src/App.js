import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import React,{useState,useContext, Suspense} from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Home from './components/Home';
import About from "./components/About";
import Login from './components/Login';
import AuthContext from "./store/auth-context";
import UserProfile from "./components/UserProfile";

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
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
  //const [props,setProps]=useState([]);
  const [showAbout,setShowAbout]=useState(false);
  const authCtx=useContext(AuthContext);

  const addToCart=(data)=>{
    console.log(data)
    setCart([...cart,{...data,quantity: 1}])

  }
  return (
    <BrowserRouter>
      <Navbar count={cart.length} setShowCart={setShowCart} setShowAbout={setShowAbout}/>
       {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/store" element={<ProductList product={product} addToCart={addToCart}/>}/>
        </Routes> */}
      {/* {showCart ? <CartList cart={cart}/>:
           <ProductList product={product} addToCart={addToCart}/>
      },
      {
        showAbout ?
        <About/>:
        <ProductList product={product} addToCart={addToCart}/>
      } */}
      <Suspense fallback={<h1>Loading...</h1>}>
       <Routes>
          <Route path="/" element={<Home/>}/>
            <Route
              path="/store"
              element={authCtx.isLoggedIn ? <ProductList product={product} addToCart={addToCart}/> : 
              <Navigate to="/login"/>}
            />
            {/* <Route path="/login" element={<Login/>}/> */}
            <Route
              path="/about"
              element={authCtx.isLoggedIn ? <About/> : <Navigate to="/login"/>}
            />
            <Route
              path="/login"
              element={!authCtx.isLoggedIn ? <Login/> :  <Navigate to='/store'/>}
            />
          <Route path="/profile" element={authCtx.isLoggedIn ? <UserProfile/> : <Navigate to='/login'/>}/>

          <Route path="/cart" element={showCart ? <CartList cart={cart}/> :
           <ProductList product={product} addToCart={addToCart}/>}/>
        </Routes>
       </Suspense>
    </BrowserRouter>
  );
}

export default App;