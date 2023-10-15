import React, { useEffect, useState } from 'react'
import './Header.css'

const CartList = ({cart}) => {
  
  const [CART,SETCART]=useState([])

  useEffect(()=>{

    SETCART(cart);
  },[cart])

  return (
    <div>
      {
        CART?.map((cartItem,cartIndex)=>{
            return (
                <div>
                    <img src={cartItem.imageUrl} width={40}/>
                    <span>{cartItem.title}</span>
                    <button 
                    onClick={()=>{
                      const _CART=CART.map((item,index)=>{
                        return cartIndex===index ? {...item, quantity: item.quantity>0 ? item.quantity -1 : 0}:item
                      })
                      SETCART(_CART)}}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button 
                    onClick={()=>{
                      const _CART=CART.map((item,index)=>{
                        return cartIndex===index ? {...item, quantity: item.quantity+1}:item
                      })
                      SETCART(_CART)
                    }}>+</button>
                    <span>Rs. {cartItem.price*cartItem.quantity}</span>
                </div>
            )
        })
      }
      <p> Total: <span> </span>
        {
          cart.map(item => item.price*item.quantity).reduce((total,value)=> total+value)
        }
      </p>
    </div>
  )
}

export default CartList
