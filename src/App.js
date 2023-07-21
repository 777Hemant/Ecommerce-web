import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
