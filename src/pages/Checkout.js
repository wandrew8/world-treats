import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import convertUSD from '../utilities/convertUSD';

const CheckoutComponent = styled.div`
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    .cart {
        margin-top: 2rem;
    }
    .num {
        display: flex;
        justify-content: space-between;

    }
    .message {
        text-align: center;
    }
    h2 {
        font-size: 1.2rem;
    }
    .item {
        display: grid;
        grid-template-columns: 75px 1fr 75px;
        grid-gap: 1rem;
        align-items: center;
        margin: 1rem 0rem;
        h2 {
            color: ${props => props.theme.primary};
            margin: 0.2rem;
        }
        p {
            margin: 0.2rem;
        }
        .total {
            align-self: flex-start;
            margin-block-start: 0.83em;
            font-size: 1.2rem;
            text-align: right;
        }
    }
    .imageContainer{
        position: relative;
        width: 75px;
        img {
            height: 75px;
            width: 75px;
            object-fit: cover;
            border: solid 3px ${props => props.theme.primary};
            border-radius: 10px;
        }
        .number {
            position: absolute;
            top: -10px;
            right: -10px;
            height: 25px;
            width: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: ${props => props.theme.primary};
            color: #fff;
        }
       
    }
`;

const Checkout = (props) => {
    const { cartItems } = props;
    const [ total, setTotal ] = useState(0);
    const [ shipping, setShipping ] = useState(499);
    useEffect(() => {
        let theTotal = 0;
        cartItems.forEach(item => {
            theTotal += item.quantity * item.product.price;
        })
        setTotal(theTotal);
        if(theTotal > 5000) {
            setShipping(0);
        } else {
            setShipping(499);
        }
    }, [cartItems])
    return (
        <CheckoutComponent>
            <h1>Your Cart</h1>
            <div className="cart">
                { cartItems.length > 0 ? cartItems.map(item => {
                    const { name, category, country, mainImage, packageDescription, size, _id, inventory, price } = item.product;
                    const { quantity } = item;
                    return (
                        <>
                            <div className="item">
                                <div className="imageContainer">
                                    <img src={mainImage} alt={name} />
                                    <div className="number">{quantity}</div>
                                </div>
                                <div>
                                    <h2>{name}</h2>
                                    <p>{convertUSD(price)} / {packageDescription}</p>
                                </div>
                                <div className="total">
                                    {convertUSD(price * quantity)}
                                </div>
                            </div>
                            <hr/>
                        </>
                        
                    )
                }) : <p>You have no items in your cart</p>}
            </div>
            <div className="subtotal">
                <div className="num">
                    <p>Subtotal:</p>
                    <h2>{convertUSD(total)}</h2>
                </div>
                <div className="num">
                    <p>Shipping:</p>
                    <h2>{convertUSD(shipping)}</h2>
                </div>
                {total < 5000 ? <div className="message"><p>Spend $50 to qualify for free shipping</p></div> : <div className="message"><p>You qualify for free shipping!</p></div> }
                <div className="num">
                    <p>Total:</p>
                    <h1>{convertUSD(total + shipping)}</h1>
                </div>
            </div>
        </CheckoutComponent>
    )
}

export default Checkout;
