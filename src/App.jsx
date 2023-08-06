import './App.css'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Details from './pages/details/Details';
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/Checkout';
import Header from './componants/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './componants/Footer/Footer';
import CartContextProvider from './context/CartContext';
function App() {
console.log('hello')

  return (
<BrowserRouter>

<Header />

<Routes>
  <Route path='/' element= {<Homepage />}/>
  <Route path='/details/:itemId' element= {<Details />}/>
  <Route path='/contact' element= {<Contact />}/>
  <Route path='/checkout' element= {<Checkout />}/>
</Routes>

<Footer />
</BrowserRouter>
    
  )
}

export default App
