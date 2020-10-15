import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
    const kebabCase = (string) => {
        return string.split(" ").join("-");
    }
    return (
        <div>
            <h1>Products Page</h1>
            {products.map(item => {
                const { allergens, category, country, description, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = item;
                return (
                    <Link to={`/products/${kebabCase(name)}`}><h1>{name}</h1></Link>
                )
            })}
        </div>
    )
}

export default Products;
