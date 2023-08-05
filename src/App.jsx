import axios from 'axios';
import { useState } from 'react'
import './App.css'
import Header from './../componants/Header';
import Homepage from '../pages/Homepage'
import Footer from '../componants/Footer/Footer';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Details from '../pages/details/Details';
import Contact from '../pages/contact/Contact';
import Checkout from '../pages/checkout/Checkout';
import CartContextProvider from './../context/CartContext';
Homepage
function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<CartContextProvider>
<Header />

<Routes>
  <Route path='/' element= {<Homepage />}/>
  <Route path='/details/:itemId' element= {<Details />}/>
  <Route path='/contact' element= {<Contact />}/>
  <Route path='/checkout' element= {<Checkout />}/>
</Routes>

<Footer />
</CartContextProvider>
</BrowserRouter>
    
  )
}

export default App
