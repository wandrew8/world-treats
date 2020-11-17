import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import styled from 'styled-components';
import { kebabCase } from '../utilities/utilityFunctions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Item = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    &:hover .subtitle {
            background-color: rgba(0,0,0,0);
            color: transparent;
            text-shadow: 0px 50px rgba(0,0,0,0.2);


        }
    &:hover img {
        transform: scale(1.2);
    }
    img {
        height: 250px;
        width: auto;
        object-fit: cover;
        transition: 200ms ease-in;
        
    }
    .subtitle {
        transition: 300ms ease-in;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 95%;
        border-radius: 10px;
        text-align: center;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        font-size: 1.8rem;
        background-color: rgba(0,0,0,0.3);
        padding: 1rem 0.2rem;
        color: white;
        margin: 0;
        text-transform: capitalize;
        text-shadow: 5px 5px rgba(0,0,0,0.2);
        font-family: 'Fredoka One', cursive;
    }
`;
const CarouselComponent = ({products}) => {
    return (
        <>
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>New Products!</h1>
            {products.length > 0 ? <Carousel style={{ backgroundColor: "#fff" }} infiniteLoop={true} autoPlay={false} centerMode={true} showStatus={false} showIndicators={false} centerSlidePercentage={100/3} showThumbs={false}>
                {products.map(product => {
                    const { mainImage, name, } = product;
                    return (
                        <Link to={`/products/${kebabCase(name)}`}>
                            <Item>
                                <img src={mainImage} alt={name}/>
                                <p className="subtitle">{name}</p>
                            </Item>
                        </Link>
                        )
                    })
                }
            </Carousel> : <Spinner relative /> }
        </>
    )
}

export default CarouselComponent;
