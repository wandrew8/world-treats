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
  const [ showCart, setShowCart ] = useState(false);
  return (
    <Router basename="/world-treats">
      <GlobalStyles showCart={showCart}/>
      <Navbar showCart={showCart} setShowCart={setShowCart}/>
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
