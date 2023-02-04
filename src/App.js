import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Product/:id" element={<Product/>}/>
      <Route path="/Products" element={<ProductList/>}/>
      
    </Routes>

    </BrowserRouter>

  )
};

export default App;