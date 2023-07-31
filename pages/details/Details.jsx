import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './details.css'
function Details() {

  const {itemId} =useParams()

  const [item, setItem] = useState('')

  useEffect(
    ()=>
    {
      axios.get(`https://fakestoreapi.com/products/${itemId}`)
      .then(res =>{
        console.log(res.data)

        setItem(res.data)
      })
      .catch(err=> console.log(err))


      console.log('get item info', itemId)      
    },[]
  )
  return (
    <div className='detail-container'>
      <img src={item?.image} alt="Product" />
      <div className='container-info'>
        <p>{item?.title}</p>
        <p>${item?.price}</p>
        <p>Description</p>
        <p className='item-description'>{item?.description}</p>
        <button className='cart-add'>Add to Cart</button>

      </div>
    </div>
  )
}

export default Details