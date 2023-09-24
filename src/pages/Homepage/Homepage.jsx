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
                setCategories(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        },[]
        )
        //create function to get the categories and  set items for onclick
        const getCategory = (category)=>{
            console.log('category is', category)
            axios.get('https://fakestoreapi.com/products/category/' + category)
            .then(res =>{
                console.log(res.data)
                
                //setCategories(res.data)
                setItems(res.data)
                return res.data
            })
            .catch(err =>{
                console.log(err)
            })
        }
       const getAll =()=>{
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }
          
        //create another function to get all products

  return (
    <div className='big-boy'>
        <div className='categories'>
            <button className='selectAll' onClick={()=>getAll()}>All</button>
               {
                categories.map((item)=><button className="selectCategory" onClick={()=>getCategory(item)}>{item}</button>)

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