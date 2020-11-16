import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import chips from '../images/chips.jpg';
import chocolate from '../images/chocolate.jpg';
import cookies from '../images/cookies.jpg';
import candy from '../images/candy.jpg';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Item = styled.div`
    position: relative;
    img {
        height: 300px;
        width: auto;
        object-fit: cover;
    }
    .subtitle {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: white;
        margin: 0;
        padding: 0rem 1rem;
        text-transform: capitalize;
        text-shadow: 5px 5px rgba(0,0,0,0.2);
        font-family: 'Fredoka One', cursive;
    }
`;
const CarouselComponent = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>New Products!</h1>
            <Carousel style={{ backgroundColor: "#fff" }} infiniteLoop={true} autoPlay={false} centerMode={true} showStatus={false} showIndicators={false} centerSlidePercentage={100/3} showThumbs={false}>
                <Item>
                    <img src={chips} />
                    <p className="subtitle">Chips & Snacks</p>
                </Item>
                <Item>
                    <img src={chocolate} />
                    <p className="subtitle">Chocolate</p>
                </Item>
                <Item>
                    <img src={cookies} />
                    <p className="subtitle">Cakes & Cookies</p>
                </Item>
                <Item>
                    <img src={candy} />
                    <p className="subtitle">Candy</p>
                </Item>
            </Carousel>
        </>
    )
}

export default CarouselComponent;
