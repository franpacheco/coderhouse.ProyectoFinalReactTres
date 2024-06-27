//import { useState } from 'react';
import "./css/main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/footer/Footer';
import  NotFound  from './components/NotFound'
import { ItemDetailContainer } from "./components/ItemDetailContainer";
//import { useState } from "react";
import { Carrito } from "./components/Carrito";
import {CartProvider } from "./context/CartContext";
import { CheckOut } from "./components/CheckOut";



function App() {

  
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />}  />
        <Route path='/category/:categoryId' element={<ItemListContainer />}  />
        <Route path='/item/:itemId' element={<ItemDetailContainer   />}  />
        <Route path='/carrito' element={<Carrito />}  />
        <Route path='/finalizar-compra' element={<CheckOut />}  />
        <Route path='*' element={<NotFound/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}
export default App;
