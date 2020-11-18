import React, { useState, useContext } from 'react';
import Cart from './Cart';
import LoginModal from './LoginModal';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCookieBite } from '@fortawesome/free-solid-svg-icons'
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
        z-index: 10;
    }
    .badge {
        display: flex;
        align-items: center;
    }
    .cookie {
        margin-right: 0.8rem;
    }
    .cartIcon {
        display: inline;
        position: relative;
    }
    .number {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -10px;
        right: -10px;
        background-color: #fff;
        color: ${props => props.theme.primary};
        border-radius: 50%;
        height: 25px;
        width: 25px;
        z-index: 5;
        font-size: 0.8rem;
    }

`;

const Navbar = ({ showCart, signout, setShowCart, cartItems, setCartItems, removeItem, userName, addToCart, incrementItem, decrementItem }) => {
    const [ showModal, setShowModal ] = useState(false);
    const user = useContext(UserContext);

    console.log(user)
    return (
        <React.Fragment>
            <LoginModal setShowModal={setShowModal} showModal={showModal}/>
            <Navigation>
                <div>
                    <Link className="badge" to="/"><FontAwesomeIcon size="2x" className="cookie" icon={faCookieBite}></FontAwesomeIcon>World Treats</Link>
                </div>
                <div>
                    { userName ? userName : ''}
                    <button onClick={() => userName ? signout() : setShowModal(true)}>{userName ? "Logout" : "Login"}</button>
                    <div className="cartIcon">
                        <FontAwesomeIcon className="icon" onClick={() => setShowCart(true)} icon={faShoppingCart} />
                        <div className="number">
                            {cartItems.length}
                        </div>
                    </div>
                </div>
            </Navigation>
            <Cart showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} removeItem={removeItem} incrementItem={incrementItem} decrementItem={decrementItem}/>
        </React.Fragment>
    )
}

export default Navbar;
