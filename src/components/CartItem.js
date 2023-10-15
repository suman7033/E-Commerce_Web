import React from 'react'
import Card from './Card'

const CartItem = () => {
  return (
    <div>
        <Card title='Colors'
        imgsrc='https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
        price='$ 100'
        />
        <Card title='Black and white Colors'
        imgsrc='https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
        price='$ 50'
        />
        <Card title='Yellow and Black Colors'
        imgsrc='https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
        price='$ 70'
        />
        <Card title='Blue Color'
        imgsrc='https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
        price='$ 100'/>
    </div>
  )
}

export default CartItem;
