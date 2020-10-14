import React, { useRef, useEffect, useCallback } from 'react'
import {useTransition, animated} from 'react-spring'
import styled from 'styled-components';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const CartContainer = styled.div`
    width: 75%;
    min-width: 300px;
    max-width: 400px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    min-height: 100vh;
    box-shadow: 0px 0px 5px 10px rgba(0,0,0,0.1);
    background-color: white;
    overflow: hidden;
    .button {
        background: none;
        height: 35px;
        width: 35px;
        transition: 200ms ease-in;
        cursor: pointer;
        border: solid lightgray 2px;
    }

    .cart-heading {
        display: flex;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }

    .items-container {
        height: 100%;
        min-height: 300px;
        max-height: 50vh;
        overflow: auto;

    }

    .cart-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding-bottom: 2rem;
    }

    .cartButtons {
        width: 240px;
        height: 50px;
        border-radius: 50px;
        border: solid blue 2px;
        display: block;
        margin: 10px auto;
        background-color: ${props => props.primary ? "blue" : "white"};
    }

    .cartCheckout {
        color: white;
        background-color: blue;
    }

    .subtotal {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
    }
    .shippingInfo {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        padding: 10px 0px;
    }

    .info {
        color: red;
        font-size: 1.5rem;
        margin-right: 10px;
    }
`;


const Cart = ({ showCart, setShowCart, cartItems, setCartItems, removeItem }) => {
    const ref = useRef();
    const transitions = useTransition(showCart, null, {
        from: { opacity: 0, width: "0%" },
        enter: { opacity: 1, width: "100%" },
        leave: { opacity: 0, width: "0%" }
    });
    const handleClick = useCallback(event => {
        if(showCart && !event.target.classList.value.includes("cart")) {
            setShowCart(false);
        }
      });
    useEffect(() => {
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, [handleClick]);
    
    return (
        transitions.map(({ item, key, props }) => {
            return item && <animated.div key={key} style={props} className="cart" ref={ref}><CartContainer className="cart">
                <div className="cart-heading">
                    <h2>Your Cart</h2>
                    <button className="button"><FontAwesomeIcon onClick={() => setShowCart(false)} icon={faChevronRight} /></button>
                </div>
                <hr/>
                <div className="items-container cart">
                    {cartItems.map(item => {
                        return (
                            <CartItem item={item} removeItem={removeItem}/>
                        )
                    })}
                </div>
                <hr/>
                <div className="cart-footer cart">
                    <div className="subtotal"><p>Subtotal:</p><p>$0.00</p></div>
                    <div className="shippingInfo">
                        <FontAwesomeIcon className="info" icon={faExclamationCircle}></FontAwesomeIcon>
                        Spend $50 more for free shipping
                    </div>
                    <button className="cartButtons">Keep Shopping</button>
                    <button className="cartButtons cartCheckout">Checkout Now</button>
                </div>

            </CartContainer></animated.div>
        }
    )
    )
}



export default Cart;
