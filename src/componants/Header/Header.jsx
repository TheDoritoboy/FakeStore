
import React from 'react'
import './Header.css'
import { TfiShoppingCart } from 'react-icons/tfi';


function Header() {
  return (
<div>
  <div className='header'>
      <a className='home' href='/'>Fake Store</a>
      <a className='cart' href='/checkout'><TfiShoppingCart style={{backgroundColor: "#FAFAFA"}}/></a>
  </div>
</div>
    
    
  )
}

export default Header; 