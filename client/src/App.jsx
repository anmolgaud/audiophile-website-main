import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import Home from './Pages/Home'
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import Congratulation from './Pages/Congratulation';

import Navbar from './Compnents/Navbar';
import Footer from './Compnents/Footer';
import Cart from './Compnents/Cart';

import swal from 'sweetalert';
import Cookies from 'universal-cookie'

const App = () => {
  const cookies = new Cookies();

  const alert = () => {
    const alerted = cookies.get("firstVisit");
    if(!alerted){
      cookies.set("firstVisit", true, {
        path : "/",
        maxAge : 18000,
      })
      swal({
        title : "Refresh if site is frozen",
        text : "Server will start in 15-30s.",
        buttons : "OK"
      })
    }
  }

  useEffect(alert, [])
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path='product/:productId' element={<Product/>} />
          <Route path='cart' element={<Cart />} />
          <Route path='purchased' element={<Congratulation />}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App