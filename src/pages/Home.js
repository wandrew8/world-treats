import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryGrid from '../components/CategoryGrid';
import HeroBanner from '../components/HeroBanner';
import Info from '../components/Info';
import Carousel from '../components/Carousel';

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
    return (
        <HomeContainer>
            <HeroBanner />
            <div className="container">
                <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Shop By Category</h1>
                <CategoryGrid />
                <Info />
                <Carousel />
            </div>
        </HomeContainer>
    )
}

export default Home;
