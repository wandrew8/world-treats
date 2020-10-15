import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import firebase from 'firebase';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles';
import './App.css';

export default function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ userInfo , setUserInfo ] = useState({});
  const [ showCart, setShowCart ] = useState(false);
  const [ cartItems, setCartItems ] = useLocalStorage([]);
  
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
    firebase.auth().onAuthStateChanged(
      user => {
        setIsLoggedIn(!!user);
        setUserInfo(firebase.auth().currentUser)
        console.log(isLoggedIn);
        console.log(userInfo);
      });
  }) 

  

  return (
    <Router basename="/world-treats">
      <GlobalStyles showCart={showCart}/>
      <Navbar userName={userInfo?.displayName} userImage={userInfo?.photoURL} cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} removeItem={removeItem}/>
      <Switch>
          <Route path="/products/:id">
            <Product addToCart={addToCart}/>
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

