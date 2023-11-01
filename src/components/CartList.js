import React, { useEffect, useState,useContext } from 'react'
import './Header.css'
import CrossIcon from '../Img/cut_icon.png'
import axios from 'axios';
import AuthContext from '../store/auth-context';

const CartList = ({cart}) => {

  const [CART,SETCART]=useState([])
  const authCtx=useContext(AuthContext);
  
  const ChangeEmail=authCtx.email.replace('@','').replace('.','')

  useEffect(()=>{

    SETCART(cart);
  },[cart])
     
   const getCall=(data)=>{
     axios.get(`https://crudcrud.com/api/073db3c7a80c4994b26944889d7f45ff/${ChangeEmail}`)
     .then((result)=>{
      console.log("result",result);
      console.log(result.title);
      SETCART(result.data,result.data.quantity,result.data.price);
      //console.log(result.data.quantity);
     })
     .catch((error)=>{
        alert(error);
     })
     //SETCART([...cart,{...data,quantity: 1}])
     //SETCART(result.data);
   }

   const deleteHandler=(id)=>{
      //alert(id);
      axios.delete(`https://crudcrud.com/api/073db3c7a80c4994b26944889d7f45ff/${ChangeEmail}/${id}`)
      .then((res)=>{
        console.log("delete",res);
        getCall();
        // const update=CART.filter(item =>item !==res)
        // console.log("update",update);
        // SETCART(update);
      })
      .catch((error)=>{
        alert(error);
      })
   }
  return (
    <div className='cartshow'>
      {
        CART?.map((cartItem,cartIndex)=>{
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
          cart?.map(item => item.price*item.quantity).reduce((total,value)=> total+value,0)
        }
        
      </p></b>
    </div>
  )
}

export default CartList;
