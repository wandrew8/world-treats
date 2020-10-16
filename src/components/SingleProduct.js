import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    .mainImage {
        width: 400px;
        height: 400px;
        object-fit: cover;
        margin: 0 auto;
    }
    .imageGallery {
        display: block;
        margin: 1rem 0rem;
        img {
            cursor: pointer;
            width: 150px;
            height: 150px;
            box-sizing: content-box;

        }
    }
    .currentImage {
        box-sizing: content-box;
        border-bottom: solid blue 5px;
    }
`;

const SingleProduct = ({ product }) => {
    const { allergens, category, country, description, imageGallery, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = product;
    const defaultImage = mainImage ? mainImage : "https://images.unsplash.com/photo-1534119428213-bd2626145164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2936&q=80";
    const [ displayImage, setDisplayImage ] = useState(defaultImage);
    return (
        <Container>
            <div>
                <img className="mainImage" src={displayImage} alt={name} />
                <div className="imageGallery">
                    <img src={defaultImage} onClick={() => setDisplayImage(defaultImage)} className={displayImage === defaultImage ? "currentImage" : ""} alt={`${name} thumbnail`} />
                    { imageGallery.length > 0 ? imageGallery.map(image => {
                        return <img src={image} className={displayImage === image ? "currentImage" : ""} onClick={() => setDisplayImage(image)} alt="gallery" />
                    }) : null}
                </div>
            </div>
            <div>
                <h1>{name}</h1>
            </div>
        </Container>
    )           
}

export default SingleProduct;
