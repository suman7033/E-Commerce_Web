import React from 'react'
import './Header.css'

const ProductList = ({product,addToCart}) => {
  //console.log("insert store");
  //console.log("product", product)
  return (
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
            return (
                <div style={{width: '50%'}}>
                   <div className='product-item'>
                    <h3>{productItem.quantity}</h3>
                     <p>{productItem.title}</p>
                     <img src={productItem.imageUrl} width='50%'/>
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
