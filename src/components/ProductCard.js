import React from 'react';
import styled from 'styled-components';
import convertUSD from '../utilities/convertUSD';
import { Link } from 'react-router-dom'

const Card = styled.div`
    width: 250px;
    margin: 0px;
    h2, h3 {
       color: ${props => props.theme.primary};
    }
    img {
        width: 230px;
        height: 200px;
        object-fit: cover;
    }
`;

const ProductCard = ({ product, url }) => {
    const { allergens, category, country, description, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = product;
    return (

        <Card>
            <Link to={`/products/${url}`}>
                <img src={mainImage} alt={name} />
                <h2>{name}</h2>
                <p>{subtitle}</p>
                <h3>{convertUSD(price)}/{packageType}</h3>
            </Link>
        </Card>
    )
}

export default ProductCard;
