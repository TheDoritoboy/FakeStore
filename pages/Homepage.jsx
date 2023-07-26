import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../src/homepage.css'
function Homepage() {

    useEffect(
        ()=>{
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        },[]
        )
  return (
    <div>
        <div>
            <button>All</button>
            <button>Electronics</button>
            <button>Jewelery</button>
            <button>Men's Clothing</button>
            <button>Woman's Closthing</button>
        </div>
        <div className='grid-container'>
                <div className='grid-item'>
                    <img src="" alt="" />
                    <p className='name'></p>
                    <p className='info'></p>
                    <p className='price'></p>
                </div>

        </div>


    </div>
  )
}

export default Homepage