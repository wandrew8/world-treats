import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../components/Button';
import hero from '../images/hero.jpg';
import heroThumbnail from '../images/heroThumbnail.jpg';
import Image from '../components/ProgressiveImage';

const HeroContainer = styled.header`
    width: 100%;
    height: 300px;
    position: relative;
    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }
    .container1 {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 50%;
        left: 50%;
        padding: 0rem 5rem;
        transform: translate(-50%, -50%);
        text-align: left;
        h1 {
            font-size: 4rem;
            color: white;
            text-transform: capitalize;
            text-shadow: 5px 5px rgba(0,0,0,0.2);
        }
        h2 {
            color: white;
            text-shadow: 2px 2px rgba(0,0,0,0.2);

        }
        .link {
            text-align: center;
            color: ${props => props.theme.primary};
            text-decoration: none;
            font-size: 1.5rem;
        }
    }
`;

const HeroBanner = () => {
    return (
        <HeroContainer>
            <Image src={hero} thumb={heroThumbnail} alt="" />
            <div className="container1">
                <h1>World Treats</h1>
                <h2>Shop in our World Treats store for delicious snacks from around the world</h2>
                <div className="link">
                    <SecondaryButton><Link to="/products" className="link">Shop Now</Link></SecondaryButton>
                </div>
            </div>
        </HeroContainer>
    )
}

export default HeroBanner;
