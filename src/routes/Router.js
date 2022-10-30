import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Singup from '../pages/Singup';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />}/>
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="Login" element={<Login />} />
      <Route path="CheckOut" element={<CheckOut />} />
      <Route path="ProductDetails" element={<ProductDetails />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Singup" element={<Singup />} />
    </Routes>
  );
}

export default Router;
