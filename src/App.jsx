import axios from 'axios';
import { useState } from 'react'
import './App.css'
import Header from '../componants/header'
import Homepage from '../pages/Homepage'
Homepage
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className= "App">
        <Header />
        <Homepage />
      </div>
    
  )
}

export default App
