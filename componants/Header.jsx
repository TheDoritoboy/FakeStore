
import React from 'react'
import '../src/App.css'
import { TfiShoppingCart } from 'react-icons/tfi';

function header() {
  return (
<div>
  <div className='header'>
      <a className='home' href='/'>Fake Store</a>
      <h2 className='cart'><TfiShoppingCart style={{backgroundColor: "#FAFAFA"}}/></h2>
  </div>
</div>
    
    
  )
}

export default header; 