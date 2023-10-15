import React from 'react'
import './CartItem.css';

const Card = (props) => {
     
  return (
    <> 
    <div className='card-container'>
      <div className='card'>
        <h3 className='card_title'>{props.title}</h3>
         <img src={props.imgsrc} className='card_img' alt='img'/>
         <div className='card_info'>
          <span>{props.price}</span>
          <button className='add-to-cart-button'>ADD TO CART</button>

         </div>
      </div>
      </div>
    </>
  )
}

export default Card;
