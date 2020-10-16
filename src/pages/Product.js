import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import SingleProduct from '../components/SingleProduct';

const Product = ({ addToCart }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ product, setProduct ] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = `https://world-treats-api.herokuapp.com/products/${id}`
        fetch(proxy + url)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          setProduct(response)
          setIsLoading(false);
        })
        .catch(err => console.log(err))
      }, [id]);
    return (
        <div>
            <h1>Product Page</h1>
            { isLoading && <Spinner />}
            {product.name ? <SingleProduct product={product} addToCart={addToCart} /> : null }
        </div>
    )
}

export default Product;
