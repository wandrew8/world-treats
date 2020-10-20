import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components';
import Hero from '../components/Hero';
import { ProductsContainer } from './Products';
import { TagButton, SmallTagButton } from '../components/Button';
import ProductCard from '../components/ProductCard';
import { kebabCase } from '../utilities/utilityFunctions';


const MainContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
`;

const Category = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    const [ countries, setCountries ] = useState([]);
    const [ filterByCountry, setFilterByCountry ] = useState("");
    const [ numItems, setNumItems ] = useState(0);
    const [ showAllCountries, setShowAllCountries ] = useState(true);
    let { categoryName } = useParams();

    const filterCountries = (country) => {
        setFilterByCountry(country);
        const length = products.filter(product => (product.country === country)).length;
        setNumItems(length);
        setShowAllCountries(false);
    }
    
    useEffect(() => {
        const getCountries = () => {
            console.log(categoryName)
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const url = `https://world-treats-api.herokuapp.com/products/countries/${categoryName}`
            fetch(proxy + url)
            .then(res => res.json())
            .then(response => {
                console.log("countries", response)
              setCountries(response)
            })
            .catch(err => console.log(err))
        }
        const getProducts = () => {
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const url = `https://world-treats-api.herokuapp.com/products/category/${categoryName}`;
            fetch(proxy + url)
            .then(res => res.json())
            .then(response => {
              console.log("products", response)
              setProducts(response)
              setIsLoading(false);
              setNumItems(response.length);
            })
            .catch(err => console.log(err))
        }
        getProducts();
        getCountries();
       
      }, [categoryName]);

    return (
        <>
        <Breadcrumb category={categoryName}/>
        <Hero category={categoryName} />
        <MainContainer>
            <ProductsContainer>
                <div className="filterOptions">
                    <h2>Filter By</h2>
                    <hr />
                    <div className="buttonHolder">
                        <h3>Country</h3>
                        { countries.length > 1 ? <SmallTagButton onClick={() => {setShowAllCountries(true); setFilterByCountry("");}} selected={showAllCountries}>Show All</SmallTagButton> : null }
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
                            <select>
                                <option>Sort By</option>
                            </select>
                        </form>
                    </div>
                    <div className="product-card-container">
                        { isLoading && <Spinner />}
                        { numItems === 0 && !isLoading ? <p className="message">No items found</p> : null}
                        { !showAllCountries ? products.filter(product => {
                            return product.country === filterByCountry
                            }
                            ).map(item => {
                            return (
                                <ProductCard product={item} url={kebabCase(item.name)} />
                            )
                        }) : products.map(item => {
                            return (
                                <ProductCard product={item} url={kebabCase(item.name)} />
                            )
                        })}
                    </div>
                </div>
            </ProductsContainer>
        </MainContainer>
        </>
    )
}

export default Category;
