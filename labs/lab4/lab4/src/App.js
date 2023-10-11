import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import inventory from './inventory.mjs';
import ComposeSalad from './ComposeSalad' //behövde justera tog bort /src
import { useState } from 'react';
import ViewOrder from './ViewOrder';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

//TODO: 1) riktiga salladsobjekt 2) flytta komponeneter till egna fil (saladselect)



function App() {
  const extras = Object.keys(inventory).filter(name => inventory[name].extra);
  const [shoppingCart, setShoppingCart] = useState([]);
  const addToCart = (saladItem) => {
    setShoppingCart([...shoppingCart, saladItem]);
  };
  return (
    <div className="container py-4">

      app:lite text för att se att det inte är tomt.
      <Header />
      <Navbar />
     
      <Outlet
context={{ shoppingCart, addToCart, inventory }} 
/>
      <Footer />



    </div>
  );
}

export default App;
