import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { TagButton, SmallTagButton } from '../components/Button';
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components';
import { kebabCase } from '../utilities/utilityFunctions';
import { devices } from '../utilities/devices';


const MainContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
`;

export const ProductsContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    min-height: 75vh;
    @media ${devices.tablet} { 
        grid-template-columns: 300px 1fr;

    }
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
    .buttonHolder {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Products = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    const [ countries, setCountries ] = useState([]);
    const [ sort, setSort ] = useState("");
    const [ totalPages, setTotalPages ] = useState(1);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ showAllCountries, setShowAllCountries ] = useState(true);
    const [ showAllCategories, setShowAllCategories ] = useState(true);
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

    const setTheTotalPages = (num) => {
        const array = [];
        for(let i = 0; i < num; i++) {
            array.push(i + 1)
        }
        return array;
    }

    const getTotalPages = () => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://world-treats-api.herokuapp.com/products/pages/getall"
        fetch(proxy + url)
        .then(res => res.json())
        .then(response => {
            console.log(response)
          setTotalPages(response)
        })
        .catch(err => console.log(err))
    }

    const getProducts = () => {
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
    }
    
    useEffect(() => {
        getProducts();
        getCountries();
        getTotalPages();
      }, []);

    const filterCountries = (country) => {
        let length;
        if (country === "All") {
            length = products.length;
            setFilterByCountry("");
        } else {
            setFilterByCountry(country);
            length = filterByCategory ? products.filter(product => (product.category === filterByCategory)).filter(product => (product.country === country)).length : products.filter(product => (product.country === country)).length;
        }
        setNumItems(length);
        setShowAllCountries(false);
    }

    const filterCategories = (category) => {
        let length;
        if (category === "All") {
            length = countries.length;
            setFilterByCategory("");
        } else {
            setFilterByCategory(category);
            length = filterByCountry ? products.filter(product => (product.country === filterByCountry)).filter(product => (product.category === category)).length : products.filter(product => (product.category === category)).length;;
        }
        setNumItems(length);
        setShowAllCategories(false);
    }
   
    const handleChange = (event) => {
        setSort(event.target.value);
      }
    return (
        <>
            <Breadcrumb />
            <MainContainer>
            <ProductsContainer>
            <div className="filterOptions">
                <h2>Filter By</h2>
                <hr />
                <div className="buttonHolder">
                    <h3>Product Type</h3>
                    <SmallTagButton onClick={() => {setShowAllCategories(true); filterCategories("All");}} selected={filterByCategory === ""}>Show All</SmallTagButton>
                </div>
                <div className="buttonContainer">
                    <TagButton selected={filterByCategory === "candy"} onClick={() => filterCategories("candy")}>Candy</TagButton>
                    <TagButton selected={filterByCategory === "chips"} onClick={() => filterCategories("chips")}>Chips & Snacks</TagButton>
                    <TagButton selected={filterByCategory === "cakes"} onClick={() => filterCategories("cakes")}>Cakes & Cookies</TagButton>
                    <TagButton selected={filterByCategory === "chocolate"} onClick={() => filterCategories("chocolate")}>Chocolate</TagButton>

                </div>
                <div className="buttonHolder">
                    <h3>Country</h3>
                    { countries.length > 1 ? <SmallTagButton onClick={() => {setShowAllCountries(true); filterCountries("All");}} selected={filterByCountry === ""}>Show All</SmallTagButton> : null }
                </div>
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
                        <select value={sort} onChange={handleChange}>
                            <option value="">Sort By</option>
                            <option value="priceLowToHigh">Price (Low to High)</option>
                            <option value="priceHighToLow">Price (High to Low)</option>
                        </select>
                    </form>
                </div>
                <div className="product-card-container">
                    { isLoading && <Spinner />}
                    { numItems === 0 && !isLoading ? <p className="message">No items found</p> : null}
                    { products.filter(product => {
                        if (filterByCategory && filterByCountry) {
                            return product.category === filterByCategory && product.country === filterByCountry;
                        } else if (filterByCategory) {
                            return product.category === filterByCategory
                        } else if (filterByCountry) {
                            return product.country === filterByCountry
                        } else {
                            return product;
                        }
                        }
                        ).sort((a, b) => {
                            if(sort === "priceLowToHigh") {
                                return a.price - b.price;
                            } else if (sort === "priceHighToLow") {
                                return b.price - a.price;
                            } else {
                                return a.name - b.name;
                            }
                        }).map(item => {
                        return (
                            <ProductCard product={item} url={kebabCase(item.name)} key={item.name}/>
                        )
                    })}
                </div>
            <Pagination totalPages={totalPages} currentPage={currentPage}/>
            </div>
            </ProductsContainer>

            </MainContainer>
        </>
    )
}

export default Products;
