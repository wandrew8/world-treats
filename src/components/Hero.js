import React from 'react';
import styled from 'styled-components';
import candy from '../images/candy.jpg';
import chocolate from '../images/chocolate.jpg';
import chips from '../images/chips.jpg';
import cookies from '../images/cookies.jpg';
import hero from '../images/hero.jpg';
import thumb from '../images/thumbnail.gif';
import candyThumb from '../images/candyThumbnail.gif';
import chipsThumb from '../images/chipsThumbnail.gif';
import chocolateThumb from '../images/chocolateThumbnail.jpg';
import cookiesThumb from '../images/cookiesThumbnail.jpg';
import Image from '../components/ProgressiveImage'

const HeroContainer = styled.header`
    width: 100%;
    height: 300px;
    position: relative;
    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }
    .title {
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
            return hero;
        }
    }

    const getThumbnail = () => {
        if(category === "Chips & Snacks") {
            return chipsThumb;
        } else if (category === "Candy") {
            return candyThumb;
        } else if(category === "Cakes & Cookies") {
            return cookiesThumb;
        } else if(category === "Chocolate") {
            return chocolateThumb;
        } else {
            return hero;
        }
    }
    return (
        <HeroContainer>
            <Image src={getCategory()} thumb={getThumbnail()} alt="" />
            <div className="title">
                <h1>{category}</h1>
            </div>
        </HeroContainer>
    )
}

export default Hero;
