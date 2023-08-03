import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ItemCard from '../../componants/ItemCards/ItemCard'
import './ManCloth.css'
function ManCloth(){
const [items, setItems] = useState([])

useEffect(

    ()=>{
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
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
<div className='big-boy'>
    <div className='categories'>
    <a className='selector' href='/'>All</a>
        <a className='selector' href='/electronics'>Electronics</a>
        <a className='selector'  href='/jewelery'>Jewelery</a>
        <a className='selector'  href='/man'>Men's Clothing</a>
        <a className='selector'  href='/woman'>Woman's Clothing</a>
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
export default ManCloth