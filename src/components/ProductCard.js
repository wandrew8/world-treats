import React from 'react';
import styled from 'styled-components';
import convertUSD from '../utilities/convertUSD';

const Card = styled.div`
    width: 300px;
    margin: 0px 20px 20px 0px;
    h2, h3 {
       color: ${props => props.theme.primary};
    }
    img {
        width: 230px;
        height: 200px;
        object-fit: cover;
    }
`;

const ProductCard = ({ product }) => {
    const { allergens, category, country, description, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = product;
    return (
        <Card>
            <img src={mainImage} alt={name} />
            <h2>{name}</h2>
            <p>{subtitle}</p>
            <h3>{convertUSD(price)}/{packageType}</h3>
        </Card>
    )
}

export default ProductCard;
