import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [ showCart, setShowCart ] = useState(false);
  const [ cartItems, setCartItems ] = useLocalStorage([]);
  const [ products, setProducts ] = useState([]);
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

  const addToCart = item => {
    setCartItems([...item])
  }

  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://world-treats-api.herokuapp.com/products"
    fetch(proxy + url)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      setProducts(response)
    })
    .catch(err => console.log(err))
  }, [setProducts]);

  return (
    <Router basename="/world-treats">
      <GlobalStyles showCart={showCart}/>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} removeItem={removeItem}/>
      <Switch>
          <Route path="/products/:id">
            <Product products={products} addToCart={addToCart}/>
          </Route>
          <Route path="/products">
            <Products products={products}/>
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

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
      value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

