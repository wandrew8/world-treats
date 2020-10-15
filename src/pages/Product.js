import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ products, addToCart }) => {
    let { id } = useParams();
    const title = id.split("-").join(" ");
    const item = products.filter(item => {
        return item.name === title;
    })
    const { allergens, category, country, description, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = item[0];
    console.log(item)
    return (
        <div>
            <h1>Product Page</h1>
            <h2>{name}</h2>
            <p>{allergens} {category} {country} {description} </p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    )
}

export default Product;
