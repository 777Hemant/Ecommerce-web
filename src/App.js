import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;

