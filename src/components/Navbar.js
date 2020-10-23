import React, { useState } from 'react';
import Cart from './Cart';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 4rem;
    background-color: ${props => props.theme.primary};
    a {
        color: white;
        text-decoration: none;
    }
    .icon {
        color: white;
        margin: 0px 20px;
        cursor: pointer;
    }
`;

const Navbar = ({ showCart, setShowCart, cartItems, setCartItems, removeItem, userName, addToCart }) => {
    const [ showModal, setShowModal ] = useState(false);



    return (
        <React.Fragment>
            <LoginModal setShowModal={setShowModal} showModal={showModal}/>
            <Navigation>
                <div>
                    <Link to="/">World Treats</Link>
                </div>
                <div>
                    { userName ? userName : ''}
                    <button onClick={() => setShowModal(true)}>{userName ? "Logout" : "Login"}</button>
                    <FontAwesomeIcon className="icon" onClick={() => setShowCart(true)} icon={faShoppingCart} />
                </div>
            </Navigation>
            <Cart showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} removeItem={removeItem}/>
        </React.Fragment>
    )
}

export default Navbar;
