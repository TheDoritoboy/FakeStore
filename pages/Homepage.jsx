import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../src/homepage.css'
import ItemCard from './../componants/ItemCards/ItemCard';
function Homepage() {

    const [items, setItems] = useState([])

    useEffect(

        ()=>{
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                console.log(res.data)
                setItems(res.data)
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