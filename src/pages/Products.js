import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard'
import { TagButton } from '../components/Button';
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
`;

const ProductsContainer = styled.main`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 1.5rem;
    .sort {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .buttonContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

    }
    .product-card-container {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        justify-content: space-evenly;
        align-items: center;
        grid-gap: 1rem;
    }
    a {
        text-decoration: none;
        color: black;
    }
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
            <ProductsContainer>
            <div className="filterOptions">
                <h2>Filter By</h2>
                <hr />
                <h3>Product Type</h3>
                <div className="buttonContainer">
                    <TagButton>Candy</TagButton>
                    <TagButton>Chips & Snacks</TagButton>
                    <TagButton>Cakes & Cookies</TagButton>
                    <TagButton>Chocolate</TagButton>

                </div>
                <h3>Country</h3>
                <div className="buttonContainer">

                </div>
                
            </div>
            <div>
                <div className="sort">
                    <h2>{ products.length === 1 ? `${products.length} item` : `${products.length} items`}</h2>
                    <form>
                        <select>
                            <option>Sort By</option>
                        </select>
                    </form>
                </div>
                <div className="product-card-container">
                    {products.map(item => {
                        return (
                            <Link to={`/products/${kebabCase(item.name)}`}><ProductCard product={item} /></Link>
                        )
                    })}
                </div>
            </div>

            </ProductsContainer>
            </MainContainer>
        </>
    )
}

export default Products;
