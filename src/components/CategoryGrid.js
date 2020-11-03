import React from 'react';
import chips from '../images/chips.jpg';
import chocolate from '../images/chocolate.jpg';
import cookies from '../images/cookies.jpg';
import candy from '../images/candy.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
            name: "Candy",
            subtitle: "Yummy, crispy and satisfying snacks from around the world",
            image: candy,
            slug: "candy"
        },
        {
            name: "Cakes & Cookies",
            subtitle: "Yummy, crispy and satisfying snacks from around the world",
            image: cookies,
            slug: "cake"
        },
    ]
    return (
        <div>
            {categories.map(item => {
                const { name, subtitle, image, slug } = item;
                return (
                    <div>
                        <img src={image} alt={name} />
                        <h2>{name}</h2>
                        <p>{subtitle}</p>
                        <Link to={`/category/${slug}`}>Shop Now</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryGrid;
