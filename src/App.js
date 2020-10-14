import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles';
import './App.css';

function App() {
  const items = [
    {
        price: 340,
        name: "Garlic Potato Chips",
        amountOrdered: 2,
        packaging: "One bag",
        image: "https://www.universalyums.com/wp-content/uploads/2020/07/Devil-Chili-Potato-Chips-1536x1536.jpg"
    },
    {
        price: 340,
        name: "Mustard Potato Chips",
        amountOrdered: 2,
        packaging: "One bag",
        image: "https://www.universalyums.com/wp-content/uploads/2020/07/Devil-Chili-Potato-Chips-1536x1536.jpg"
    }
]
  const [ showCart, setShowCart ] = useState(false);
  const [ cartItems, setCartItems ] = useState(items);
  const incrementItem = (item) => {
     
  }
  const decrementItem = (item) => {

  }
  const removeItem = (el) => {
    const filtered = cartItems.filter(item => {
      return item.name !== el;
    })
    setCartItems(filtered);
  }
  return (
    <Router basename="/world-treats">
      <GlobalStyles showCart={showCart}/>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} removeItem={removeItem}/>
      <Switch>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
