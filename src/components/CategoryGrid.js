import React from 'react';
import chips from '../images/chips.jpg';
import chocolate from '../images/chocolate.jpg';
import cookies from '../images/cookies.jpg';
import candy from '../images/candy.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../utilities/devices';

const Grid = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    width: 90%;
    max-width: 1000px;
    margin-top: 2rem;
    @media ${devices.tablet} { 
        grid-template-columns: repeat(2, 1fr);

    }


`;

const Item = styled.div`
    position: relative;
    border-radius: 10px;
    transition: 200ms ease-in;
    height: 300px;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.1);
    }
    &:hover h2 {
        transform: scale(1.2);
    }
    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;


    }
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 20;
        h2 {
            font-size: 3rem;
            color: white;
            text-transform: capitalize;
            text-shadow: 5px 5px rgba(0,0,0,0.2);
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
        }
        p {
            color: white;
            font-size: 1.2rem;
            font-weight: 700;
        }

    }
    .mask {
        width: 100%;
        height: 300px;
        background-color: rgba(0,0,0,0.05);
        z-index: 10;
        position: absolute;
        border-radius: 10px;

    }
`;

const CategoryGrid = () => {
    const categories = [
        {
            name: "Chips & Snacks",
            subtitle: "Yummy, crispy and satisfying snacks from around the world",
            image: chips,
            slug: "chips"
        },
        {
            name: "Chocolate",
            subtitle: "Yummy, crispy and satisfying snacks from around the world",
            image: chocolate,
            slug: "chocolate"
        },
        {
            name: "Cakes & Cookies",
            subtitle: "Yummy, crispy and satisfying snacks from around the world",
            image: cookies,
            slug: "cake"
        },
        {
            name: "Candy",
            subtitle: "Yummy, crispy and satisfying snacks from around the world",
            image: candy,
            slug: "candy"
        },
    ]
    return (
        <Grid>
            {categories.map(item => {
                const { name, subtitle, image, slug } = item;
                return (
                    <Item>
                        <Link to={`/category/${slug}`}>
                            <div className="mask"></div>
                            <img src={image} alt={name} />
                        <div className="content">
                            <h2>{name}</h2>
                            {/* <p>{subtitle}</p> */}
                        </div>
                        </Link>
                    </Item>
                )
            })}
        </Grid>
    )
}

export default CategoryGrid;
