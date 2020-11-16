import React from 'react';
import styled from 'styled-components';
import sourcing from '../images/sourcing.png';
import selection from '../images/selection.png';
import freshness from '../images/freshness.png';


const info = [
    {
        description: "For the last 6 years, we've sampled thousands of tasty (and not-so-tasty) treats from around the world. Only the ones that blew us away made it into the World Treats Shop.",
        image: sourcing,
        title: "Expert Sourcing"
    },
    {
        description: "We've got everything here. Aioli Garlic Potato Chips, Gin & Rhubarb Candies, Raspberry Macaron Truffles, Speculoos Cookies… when we say 'everything', we mean it.",
        image: selection,
        title: "Unmatched Selection"
    },
    {
        description: "Stale sweets? Chalky chocolate? Not here! You deserve the world's greatest snacks in the world's greatest condition–and that's exactly what you’ll receive!",
        image: freshness,
        title: "Freshness Guarantee"
    },

];

const InfoComponent = styled.div`
    text-align: center;
    padding: 0rem 4rem;
    margin: 0 auto;
    max-width: 1000px;
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        p {
            font-size: 1.1rem;
        }
    }
`;

const Info = () => {
    return (
        <InfoComponent>
            <h1>Welcome to the World Treats Shop</h1>
            <h2>You're going to like it around here.</h2>
            <div className="grid">
                {info.map(item => {
                    const { description, image, title } = item;
                    return (
                        <div key={title} className="item">
                            <h2>{title}</h2>
                            <img src={image} alt={title} />
                            <p>{description}</p>
                        </div>
                    )
                })}
                
            </div>
        </InfoComponent>
    )
}

export default Info;
