import axios from 'axios';
import { useState } from 'react'
import './App.css'
import Header from '../componants/header'
import Homepage from '../pages/Homepage'
import Footer from '../componants/Footer/Footer';
import {BroswerRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Details from '../pages/details/Details';
import Contact from '../pages/contact/Contact';
Homepage
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element= {<Homepage />}/>
            <Route path='/details' element= {<Details />}/>
            <Route path='/contact' element= {<Contact />}/>
          </Routes>

          <Footer />
      </BrowserRouter>
    
  )
}

export default App
