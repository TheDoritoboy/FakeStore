import { useState } from 'react'
import './App.css'
import Header from '../componants/header'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className= "App">
        <Header />
        <h1>Hello there</h1>
      </div>
    
  )
}

export default App
