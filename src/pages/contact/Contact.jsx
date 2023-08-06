import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className='contact-container'>
        <h1 className='contact-title'>Contact Us</h1>
        <input className='name'  type="text" placeholder='First Name' />
        <input className='name' type="text" placeholder='Last Name'/>
        <input className='message' type="text" placeholder='Write your message here'/>
        <button className='submit'>Submit</button>
    </div>
  )
}

export default Contact