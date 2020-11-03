import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryGrid from '../components/CategoryGrid';

const HomeContainer = styled.main`
    min-height: 100vh;
    h1 {
        text-align: center;
        font-size: 6rem;
    }
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
            <h1>World Treats</h1>
            <div className="container">
                <h2>Shop in our World Treats store for delicious snacks from around the world</h2>
                <Link to="/products">Shop Now!</Link>
            </div>
            <CategoryGrid />
        </HomeContainer>
    )
}

export default Home;
