import React from 'react'
import './Header.css'

const ProductList = ({product,addToCart}) => {
  //console.log("insert store");
  return (
    <div className='flex' key={product.title}>
      {
        product.map((productItem,productIndex)=>{
            return (
              <div>
                 {/* <div style={{width: '50%'}}> */}
                   <div className='product-item'>
                    <h3>{productItem.quantity}</h3>
                     <p><b>{productItem.title}</b></p>
                     <img src={productItem.imageUrl} width='60%'/>
                     <h3 className='Rs'>Rs. {productItem.price}</h3>
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
