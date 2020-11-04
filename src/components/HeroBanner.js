import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import candy from '../images/candy.jpg';

const HeroContainer = styled.header`
    width: 100%;
    height: 300px;
    position: relative;
    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }
    div {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 50%;
        left: 50%;
        padding: 0rem 5rem;
        transform: translate(-50%, -50%);
        h1 {
            font-size: 4rem;
            color: white;
            text-transform: capitalize;
            text-shadow: 5px 5px rgba(0,0,0,0.2);
        }
    }
`;

const HeroBanner = () => {
    return (
        <HeroContainer>
            <img src={candy} alt="" />
            <div>
                <h1>World Treats</h1>
                <h2>Shop in our World Treats store for delicious snacks from around the world</h2>
                <Link to="/products" className="link">Show Now</Link>
            </div>
        </HeroContainer>
    )
}

export default HeroBanner;
