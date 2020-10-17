import React, { useRef, useEffect, useCallback } from 'react'
import {useTransition, animated} from 'react-spring'
import styled from 'styled-components';
import CartItem from './CartItem';
import { PrimaryButton, SecondaryButton, IconButtonSquare } from './Button';
import useClickOutside from '../utilities/useClickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const CartContainer = styled(animated.div)`
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
    .message {
        text-align: center;
        margin-top: 2rem;
    }
`;


const Cart = ({ showCart, setShowCart, cartItems, setCartItems, removeItem }) => {
    const ref = useRef();
    const transitions = useTransition(showCart, null, {
        from: { transform: "translateX(100%)" },
        enter: { transform: "translateX(0%)" },
        leave: { transform: "translateX(calc(103%)" }
    });
    useClickOutside(ref, () => setShowCart(false));
    return (
        transitions.map(({ item, key, props }) => {
            return item && <CartContainer key={key} style={props} className="cart" ref={ref}>
                <div className="cart-heading">
                    <h2>Your Cart</h2>
                    <IconButtonSquare><FontAwesomeIcon onClick={() => setShowCart(false)} icon={faChevronRight} /></IconButtonSquare>
                </div>
                <hr/>
                <div className="items-container cart">
                    {cartItems.length > 0 ? cartItems.map(item => {
                        return (
                            <CartItem item={item} removeItem={removeItem}/>
                        )
                    }) : <div className="message">You have no items in your cart</div>}
                </div>
                <div className="cart-footer cart">
                <hr/>
                    <div className="subtotal"><p>Subtotal:</p><p>$0.00</p></div>
                    <div className="shippingInfo">
                        <FontAwesomeIcon className="info" icon={faExclamationCircle}></FontAwesomeIcon>
                        Spend $50 more for free shipping
                    </div>
                    <SecondaryButton onClick={() => setShowCart(false)}>Keep Shopping</SecondaryButton>
                    <PrimaryButton>Checkout Now</PrimaryButton>
                </div>

            </CartContainer>
        }
    )
    )
}

export default Cart;