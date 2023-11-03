import React, { useEffect, useState,useContext } from 'react'
import './Header.css'
import CrossIcon from '../Img/cut_icon.png'
import axios from 'axios';
import AuthContext from '../store/auth-context';

const CartList = ({cart}) => {

  const [CART,SETCART]=useState([])
  const authCtx=useContext(AuthContext);
  
  const ChangeEmail=authCtx.email.replace('@','').replace('.','')
  //const CART=authCtx.items;

  useEffect(()=>{
     //const CART=authCtx.items;
    SETCART(cart);
  },[cart])
   const deleteHandler=(id)=>{
      //alert(id);
      axios.delete(`https://crudcrud.com/api/507c456eea8a4ee5a8c4429de7076c07/${ChangeEmail}/${id}`)
      .then((res)=>{
        console.log("delete",id);
        authCtx.removeItem(id);
      })
      .catch((error)=>{
        alert(error);
      })
   }
  return (
    <div className='cartshow'>
      {
        authCtx.items ?.map((cartItem,cartIndex)=>{
            return (
                <div>
                  <button className='cross' onClick={()=>deleteHandler(cartItem._id)}><img src={CrossIcon} width={30}/></button><br/>
                    <img className='img' src={cartItem.imageUrl} width={60}/> <br/>
                    <span><b>{cartItem.title}</b></span><br/>
                    <button className='minus-button'
                    onClick={()=>{
                      const _CART=CART.map((item,index)=>{
                        return cartIndex===index ? {...item, quantity: item.quantity>0 ? item.quantity -1 : 0}:item
                      })
                      SETCART(_CART)}}>-</button> &nbsp; 
                      {/* CART(_CART)}}>-</button> &nbsp; */}
                    <span><b>{cartItem.quantity}</b></span>&nbsp; &nbsp;
                    <button className='plus-button'
                    onClick={()=>{
                      const _CART=CART.map((item,index)=>{
                        return cartIndex===index ? {...item, quantity: item.quantity+1}:item
                      })
                      SETCART(_CART)
                      // CART(_CART);
                    }}>+</button>&nbsp;
                    <span><b>Rs. {cartItem.price*cartItem.quantity}</b></span><hr/>
                </div>
            )
        })
      }
      <b><p className='total'> Total: <span> </span>
        {
          authCtx.items?.map(item => item.price*item.quantity).reduce((total,value)=> total+value,0)
        }
        
      </p></b>
    </div>
  )
}

export default CartList;
