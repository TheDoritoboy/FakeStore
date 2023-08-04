import React, {useState, useEffect } from 'react'
import './ItemCard.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
//AiOutlineHeart
//AiFillHeart
function ItemCard({item}) {

  const [textState, setTextState] = useState(<AiOutlineHeart />);

  const toggleText = () => {
    setTextState((state) => (state === <AiFillHeart /> ? <AiOutlineHeart /> : <AiFillHeart />));
};


  return (
    <div className='item-card'>
       <button onClick={toggleText} className='heart'>{textState}</button>
      <img src={item.image} alt="goods" />
      <a href= {`/details/${item.id}`} className='title'>{item.title}</a>
      <p className='category'>{item.category}</p>
      <p className='price'>${item.price}</p>
     </div>
  
  )
}

export default ItemCard