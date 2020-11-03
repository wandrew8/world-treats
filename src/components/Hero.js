import React from 'react';
import styled from 'styled-components';
import candy from '../images/candy.jpg';
import chocolate from '../images/chocolate.jpg';
import chips from '../images/chips.jpg';
import cookies from '../images/cookies.jpg';

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
        left: 15%;
        transform: translateY(-25%);
        h1 {
            font-size: 4rem;
            color: white;
            text-transform: capitalize;
            text-shadow: 5px 5px rgba(0,0,0,0.2);
        }
    }
`;

const Hero = ({ category }) => {
    const getCategory = () => {
        if(category === "Chips & Snacks") {
            return chips;
        } else if (category === "Candy") {
            return candy;
        } else if(category === "Cakes & Cookies") {
            return cookies;
        } else if(category === "Chocolate") {
            return chocolate;
        } else {
            return candy;
        }
    }
    return (
        <HeroContainer>
            <img src={getCategory()} alt="" />
            <div>
                <h1>{category}</h1>
            </div>
        </HeroContainer>
    )
}

export default Hero;
