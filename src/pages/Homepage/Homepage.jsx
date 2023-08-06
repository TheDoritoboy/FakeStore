import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './homepage.css'
import ItemCard from '../../componants/ItemCards/ItemCard';
function Homepage() {

    const [items, setItems] = useState([])

    const [categories, setCategories] =useState([])
/*
    useEffect(
        ()=>{
            console.log('homepage loaded')
        },[]
    )
    */
    useEffect(

        ()=>{
           // console.log('homepage loaded')
           //make api call to get products
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

            //make api call to make categories
            axios.get('https://fakestoreapi.com/products/categories')
            .then(res =>{
                console.log(res.data)
                //I have the categories, where do I save them?
                setCategories(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        },[]
        )
        //create function to get the categories
        const getCategory = (category)=>{
            console.log('category is', category)
//make an api call to get data for this category
//once i have the data, store it in items to change what i see on the page
        }
          
        //create another function to get all products

  return (
    <div className='big-boy'>
        <div className='categories'>
            <p className='selector' href='/'>All</p>
               {
                categories.map((item)=><p onClick={()=>getCategory(item)}>{item}</p>)


               } 

            {/* <a className='selector' href='/electronics'>Electronics</a>
            <a className='selector'  href='/jewelery'>Jewelery</a>
            <a className='selector'  href='/man'>Men's Clothing</a>
            <a className='selector'  href='/woman'>Woman's Clothing</a> 0*/}
        </div>
        <div className='card-container'>
            {
                items.map(thing => <ItemCard
                     key={thing.id} item={thing}/>)
                //items.map(thing => <p key={thing.title}>{thing.title}</p>)
            }
        </div>




    </div>
  )
}

export default Homepage