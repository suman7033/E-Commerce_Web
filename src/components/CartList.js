import React, { useEffect, useState } from 'react'
import './Header.css'

const CartList = ({cart}) => {
  
  const [CART,SETCART]=useState([])

  useEffect(()=>{

    SETCART(cart);
  },[cart])

  return (
    <div className='cartshow'>
      {
        CART?.map((cartItem,cartIndex)=>{
            return (
                <div>
                    <img className='img' src={cartItem.imageUrl} width={60}/><br/>
                    <span><b>{cartItem.title}</b></span><br/>
                    <button className='minus-button'
                    onClick={()=>{
                      const _CART=CART.map((item,index)=>{
                        return cartIndex===index ? {...item, quantity: item.quantity>0 ? item.quantity -1 : 0}:item
                      })
                      SETCART(_CART)}}>-</button> &nbsp; 
                    <span><b>{cartItem.quantity}</b></span>&nbsp; &nbsp;
                    <button className='plus-button'
                    onClick={()=>{
                      const _CART=CART.map((item,index)=>{
                        return cartIndex===index ? {...item, quantity: item.quantity+1}:item
                      })
                      SETCART(_CART)
                    }}>+</button>&nbsp;
                    <span><b>Rs. {cartItem.price*cartItem.quantity}</b></span><hr/>
                </div>
            )
        })
      }
      <b><p className='total'> Total: <span> </span>
        {
          cart.map(item => item.price*item.quantity).reduce((total,value)=> total+value)
        }
      </p></b>
    </div>
  )
}

export default CartList
