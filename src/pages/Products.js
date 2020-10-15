import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Products = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://world-treats-api.herokuapp.com/products"
        fetch(proxy + url)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          setProducts(response)
          setIsLoading(false);
        })
        .catch(err => console.log(err))
      }, [setProducts]);

    const kebabCase = (string) => {
        return string.split(" ").join("-");
    }
    return (
        <div>
            <h1>Products Page</h1>
            { isLoading && <Spinner />}
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
