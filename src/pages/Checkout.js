import React from 'react'

const Checkout = (props) => {
    const { cartItems } = props;
    console.log(cartItems)
    return (
        <div>
            <h1>Your Cart</h1>
            { cartItems.length > 0 ? cartItems.map(item => {
                const { name, category, country, mainImage, size, _id, inventory } = item.product;
                return (
                    <p>{name}</p>
                )
            }) : <p>You have no items in your cart</p>}
        </div>
    )
}

export default Checkout;
