import React from 'react'
import './ItemCard.css'
function ItemCard({item}) {
  return (
    <div className='item-card'>
      <img src={item.image} alt="goods" />
      <a href='/details' className='title'>{item.title}</a>
      <p className='category'>{item.category}</p>
      <p className='price'>${item.price}</p>
     </div>
  
  )
}

export default ItemCard