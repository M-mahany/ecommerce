import React from 'react';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter,
    Route,
    Routes
  }from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={
          user ? <Redirect to="/" /> : <Register />
          }/>
        </Routes>
      </BrowserRouter>
   );
}
 
export default App;