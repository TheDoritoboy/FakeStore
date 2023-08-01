import React, {useState} from 'react'
import Modal from 'react-modal';
import axios from'axios'
import './Checkout.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
function Checkout() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div >
        <button onClick={()=>setIsOpen(true)}>Checkout</button>
        
        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout-Modal"
      >
       <div className='modal'>
        <div className='success'>
        <h2 className='inner-success'>Your order was successful!</h2>
        <h2 className='inner-success'> Check your email for the order confirmation. Thank you for shopping with Fake Store!</h2>
        </div>
        <a className='home-btn' href="/">Return to Main Page</a>
        </div>
      </Modal>
        
    </div>
  )
}

export default Checkout