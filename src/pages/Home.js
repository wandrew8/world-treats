import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryGrid from '../components/CategoryGrid';
import HeroBanner from '../components/HeroBanner';
import Info from '../components/Info';

const HomeContainer = styled.main`
    min-height: 100vh;
    .container {
        text-align: center;
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
            <h1>Shop By Category</h1>
            <CategoryGrid />
            <Info />
        </HomeContainer>
    )
}

export default Home;
