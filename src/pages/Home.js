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
    const data = [
        {
            name: "Spicy Mango Gummies",
            mainImage: "https://res.cloudinary.com/dcokaa0ia/image/upload/v1602696559/worldtreats/Spicy-Mango-Gummies-2-1536x1536_ozp9ta.jpg"

        },
        {
            name: "Korean BBQ Chips",
            mainImage: "https://res.cloudinary.com/dcokaa0ia/image/upload/v1605640347/worldtreats/Korean-Fried-Chicken-Balls-1536x1536_gtjuk0.jpg"
        },
        {
            name: "Taiwanese Boba Popcorn",
            mainImage: "https://res.cloudinary.com/dcokaa0ia/image/upload/v1605639997/worldtreats/Bubble-Tea-Popcorn-1536x1536_jwz6lq.jpg"
        }

    ]
    const [ newProducts, setNewProducts ] = useState(data);
    useEffect(() => {
        async function getData() {
            const amount = 5;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const url = `https://world-treats-api.herokuapp.com/products/newproducts/${amount}`
            const result = await axios(proxy + url);
            setNewProducts(result.data)
            console.log(result.data)
        }
        getData();           
    })

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
