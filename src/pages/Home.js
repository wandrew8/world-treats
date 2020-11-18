import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryGrid from '../components/CategoryGrid';
import HeroBanner from '../components/HeroBanner';
import Info from '../components/Info';
import Carousel from '../components/Carousel';
import axios from 'axios';

const HomeContainer = styled.main`
    min-height: 100vh;
    .container {
        margin: 0 auto;
        max-width: 1000px;
    }
    a {
        color: ${props => props.theme.primary};
        font-size: 2rem;
    }
`;

const Home = () => {
    const [ newProducts, setNewProducts ] = useState([]);
    useEffect(() => {
        async function getData() {
            const amount = 5;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const url = `https://world-treats-api.herokuapp.com/products/newproducts/${amount}`
            const result = await axios(proxy + url);
            setNewProducts(result.data)
        }
        getData();           
    }, [])

    return (
        <HomeContainer>
            <HeroBanner />
            <div className="container">
                <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Shop By Category</h1>
                <CategoryGrid />
                <Info />
                <Carousel products={newProducts}/>
            </div>
        </HomeContainer>
    )
}

export default Home;
