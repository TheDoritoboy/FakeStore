import axios from 'axios';
import { useState } from 'react'
import './App.css'
import Header from '../componants/header'
import Homepage from '../pages/Homepage'
import Footer from './../componants/ItemCards/Footer/Footer';
Homepage
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className= "App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    
  )
}

export default App
