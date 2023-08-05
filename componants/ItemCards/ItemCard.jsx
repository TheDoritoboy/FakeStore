import React, {useState, useContext } from 'react'
import './ItemCard.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { cartContext } from '../../context/CartContext';
//AiOutlineHeart
//AiFillHeart
function ItemCard({item}) {
const {addCart} = useContext(cartContext)

  const isCart = false;




  return (
    <div className='item-card'>
       {
        isCart?
        <AiOutlineHeart className='heart'/>
        :
        <AiFillHeart onClick={()=>addCart(item)} className='heart'/>
       }
      <img src={item.image} alt="goods" />
      <a href= {`/details/${item.id}`} className='title'>{item.title}</a>
      <p className='category'>{item.category}</p>
      <p className='price'>${item.price}</p>
     </div>
  
  )
}

export default ItemCard