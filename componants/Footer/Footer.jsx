import React from 'react'
import { AiTwotoneFire } from "react-icons/ai";
import './footer.css'

function Footer() {
  return (
    <div className='foot-container'>
        <p className='foot-stuff'>made with <AiTwotoneFire /> by Kenny</p>
        <a className='foot-stuff' href="#">Contact Us</a>
    </div>
  )
}

export default Footer