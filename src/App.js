import React, { useState, useEffect, createContext } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import firebase from 'firebase';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Product from './pages/Product';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles';
import './App.css';

export const UserContext = createContext({"isLoggedIn": false});
export default function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ userInfo , setUserInfo ] = useState({});
  const [ showCart, setShowCart ] = useState(false);
  const [ cartItems, setCartItems ] = useLocalStorage("cart", []);
  const theme = {
    primary: "#0abde3",
  };
  
  const incrementItem = (index) => {
    const newArray = [...cartItems];
    newArray[index].quantity++;
    setCartItems(newArray);
     
  }

  const decrementItem = (index) => {
    const newArray = [...cartItems];
    if (newArray[index].quantity > 1) {
      newArray[index].quantity--;
    };
    setCartItems(newArray);
  }

  const removeItem = (el) => {
    const filtered = cartItems.filter(item => {
      return item.product.name !== el;
    })
    setCartItems(filtered);
  }

  const addToCart = item => {
    let identicalItem;
    for (let i = 0; i < cartItems.length; i++){
      if(cartItems[i].product.name === item.product.name) {
        identicalItem = true;
      } else {
        identicalItem = false;
      }
    }    
    if (identicalItem) {
      setShowCart(true);
    } else {
      setCartItems([...cartItems, item]);
      setShowCart(true);
    }
  }
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      user => {
        setIsLoggedIn(!!user);
        setUserInfo({...firebase.auth().currentUser, "isLoggedIn": true })
      });
  }, [isLoggedIn]) 

 const signout = () => {
    firebase.auth().signOut();
    setIsLoggedIn(false);
    setUserInfo({"isLoggedIn": false})
}
  

  return (
    <Router basename="/world-treats">
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={userInfo}>
          <GlobalStyles showCart={showCart}/>
          <Navbar userName={userInfo?.displayName} signout={signout} userImage={userInfo?.photoURL} cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} addToCart={addToCart} removeItem={removeItem} incrementItem={incrementItem} decrementItem={decrementItem}/>
          <Switch>
            <Route path="/products/:id">
              <Product addToCart={addToCart}/>
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/category/:categoryName">
              <Category />
            </Route>
            <Route path="/checkout">
              <Checkout cartItems={cartItems}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </UserContext.Provider>
      </ThemeProvider>
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


