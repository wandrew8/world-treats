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
        position: relative;
        .message {
            justify-self: center;
        }
    }
    a {
        text-decoration: none;
        color: black;
    }
`;

const Products = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    const [ countries, setCountries ] = useState([]);
    const [ filterByCountry, setFilterByCountry ] = useState("");
    const [ filterByCategory, setFilterByCategory ] = useState("");
    const [ numItems, setNumItems ] = useState(0);

    const getCountries = () => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://world-treats-api.herokuapp.com/products/countries/getall"
        fetch(proxy + url)
        .then(res => res.json())
        .then(response => {
          setCountries(response)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://world-treats-api.herokuapp.com/products"
        fetch(proxy + url)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          setProducts(response)
          setIsLoading(false);
          setNumItems(response.length);
        })
        .catch(err => console.log(err))
        getCountries();
      }, []);

    const kebabCase = (string) => {
        return string.split(" ").join("-");
    }

    const filterCountries = (country) => {
        setFilterByCountry(country);
        const length = products.filter(product => (product.country === country)).length;
        setNumItems(length);
    }

    const filterCategories = (category) => {
        setFilterByCategory(category);
        const length = products.filter(product => (product.category === category)).length;
        setNumItems(length);

    }
    return (
        <>
            <Breadcrumb />
            <MainContainer>
            <ProductsContainer>
            <div className="filterOptions">
                <h2>Filter By</h2>
                <hr />
                <h3>Product Type</h3>
                <div className="buttonContainer">
                    <TagButton selected={filterByCategory === "candy"} onClick={() => filterCategories("candy")}>Candy</TagButton>
                    <TagButton selected={filterByCategory === "chips"} onClick={() => filterCategories("chips")}>Chips & Snacks</TagButton>
                    <TagButton selected={filterByCategory === "cakes"} onClick={() => filterCategories("cakes")}>Cakes & Cookies</TagButton>
                    <TagButton selected={filterByCategory === "chocolate"} onClick={() => filterCategories("chocolate")}>Chocolate</TagButton>

                </div>
                <h3>Country</h3>
                <div className="buttonContainer">
                    { countries.map(country => {
                        return (
                            <TagButton selected={filterByCountry === country} onClick={() => filterCountries(country)}>{country}</TagButton>
                        )
                    })}
                </div>
                
            </div>
            <div>
                <div className="sort">
                    <h2>{ numItems === 1 ? `${numItems} item` : `${numItems} items`}</h2>
                    <form>
                        <select>
                            <option>Sort By</option>
                        </select>
                    </form>
                </div>
                <div className="product-card-container">
                    { isLoading && <Spinner />}
                    { numItems === 0 && !isLoading ? <p className="message">No items found</p> : null}
                    {filterByCountry || filterByCategory? products.filter(product => {
                        if (filterByCategory && filterByCountry) {
                            return product.category === filterByCategory && product.country === filterByCountry;
                        } else if (filterByCategory) {
                            return product.category === filterByCategory
                        } else if (filterByCountry) {
                            return product.country === filterByCountry
                        }
                        }
                        ).map(item => {
                        return (
                            <Link to={`/products/${kebabCase(item.name)}`}><ProductCard product={item} /></Link>
                        )
                    }) : products.map(item => {
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
