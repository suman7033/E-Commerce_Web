import React,{useState} from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

const App = () => {
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

  return (
    <div>
      <Navbar count={cart.length} setShowCart={setShowCart}/>
      {
        showCart ?
        <CartList cart={cart}/>:
      <ProductList product={product} addToCart={addToCart}/>

      }

    </div>
  )
}

export default App;
