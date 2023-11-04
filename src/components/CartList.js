import React, { useEffect, useState,useContext } from 'react'
import './Header.css'
import CrossIcon from '../Img/cut_icon.png'
import axios from 'axios';
import AuthContext from '../store/auth-context';

const CartList = ({cart}) => {
  //const [cartp,setCartP]=useState(1)
  const authCtx=useContext(AuthContext);
  
  const ChangeEmail=authCtx.email.replace('@','').replace('.','')
  
   const deleteHandler=(id)=>{
      //alert(id);
      axios.delete(`https://crudcrud.com/api/05cba5426496453f9fe23bad917a534e/${ChangeEmail}/${id}`)
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
                      authCtx.removeItem(cartItem);
                      }}>-</button> &nbsp;
                       
                    <span><b>{cartItem.quantity}</b></span>&nbsp; &nbsp;

                    <button className='plus-button'
                    onClick={()=>{
                      authCtx.addItem(cartItem);
                      }}>+</button>&nbsp;
                      
                    <span><b>Rs. {authCtx.price*cartItem.quantity}</b></span><hr/>
                </div>
            )
        })
         
      }
      <b><p className='total'> Total: <span> </span>
        {
          authCtx.items?.map(item => authCtx.price*authCtx.items.length).reduce((total,value)=> total+value,0)
        }
        
      </p></b>
    </div>
  )
}

export default CartList;

 