import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Layout/MainLayout'
import Home from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
import Portfolio from './Pages/ParfolioPage'
import Pricing from './Pages/PricingPage'
import Contacts from './Pages/ContactsPage'
import AddPage from './Pages/AddPage'
import Detail from './Pages/DetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='/add' element={<AddPage />}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
