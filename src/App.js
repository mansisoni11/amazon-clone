import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer'
import Sign_in from './components/signup_sign/Sign_in'
import SignUp from './components/signup_sign/SignUp'
import { Routes, Route} from "react-router-dom"
import Cart from './components/cart/cart'
import Buynow from './components/buynow/buynow';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
   <Navbaar/>
   <Newnav/>
   <Routes>
    <Route path="/" element={<Maincomp/>} />
    <Route path="/login" element={<Sign_in/>} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/getproductsone/:id" element={<Cart />} />
    <Route path="/Buynow" element={<buynow/>} />
   </Routes>
   <Footer />
    </div>
  );
}

export default App;
