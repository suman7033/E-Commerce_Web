import React from 'react'
import './Header.css'

const ProductList = ({product,addToCart}) => {
  //console.log("insert store");
  return (
    <div className='flex' key={product.title}>
      {
        product.map((productItem,productIndex)=>{
            return (
                <div style={{width: '50%'}}>
                   <div className='product-item'>
                    <h3>{productItem.quantity}</h3>
                     <p>{productItem.title}</p>
                     <img src={productItem.imageUrl} width='20%'/>
                     <h3>Rs. {productItem.price}</h3>
                     <button className='btn btn-outline-success' onClick={()=> addToCart(productItem)}>Add To Cart</button>
                   </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ProductList
