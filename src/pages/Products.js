import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
`;

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
        <>
            <Breadcrumb />
            <MainContainer>
            { isLoading && <Spinner />}
            {products.map(item => {
                const { allergens, category, country, description, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = item;
                return (
                    <Link to={`/products/${kebabCase(name)}`}><h1>{name}</h1></Link>
                )
            })}
            </MainContainer>
        </>
    )
}

export default Products;
