import React, { useState } from 'react';
import styled from 'styled-components';
import convertUSD from '../utilities/convertUSD';
import { IconButton } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
    .quantity-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        align-items: center;
        justify-content: center;
        border: solid lightgray 1px;
        padding: 20px 10px;
        div {
            text-align: center;
            p {
                margin: 5px 0px;
            }
        }
        .description {
            text-align: left;
            font-size: 1.2rem;
        }
    }
    .addCartButton {
        width: 240px;
        height: 50px;
        border-radius: 50px;
        border: solid blue 2px;
        display: block;
        margin: 10px auto;
        outline: none;
        cursor: pointer;
        background-color: blue;
        color: white;
    }
`;

const SingleProduct = ({ product }) => {
    const [ quantity, setQuantity ] = useState(1);
    const { allergens, category, country, description, imageGallery, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = product;
    const defaultImage = mainImage ? mainImage : "https://images.unsplash.com/photo-1534119428213-bd2626145164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2936&q=80";
    const [ displayImage, setDisplayImage ] = useState(defaultImage);
    const [ total, setTotal ] = useState(price * quantity)
    const decrementQuantity = () => {
        if(quantity - 1 > 0) {
            setQuantity(quantity - 1)
            setTotal((quantity - 1) * price)
        } 
    }

    const incrementQuantity = () => {
        console.log("this works")
        setQuantity(quantity + 1);
        setTotal((quantity + 1) * price)
    }
    
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
                <h3>{subtitle}</h3>
                <h3>{packageDescription} | {size}</h3>
                <p>{description}</p>
                <div className="select-quantity">
                    <p>Select Quantity</p>
                    <div className="quantity-container">
                        <div>
                            <IconButton onClick={() => decrementQuantity()}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></IconButton>
                            {quantity}
                            <IconButton onClick={() => incrementQuantity()}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></IconButton>
                        </div>
                        <div className="description">
                            <p>{packageDescription}</p>
                            <p>{convertUSD(price)} per {packageType}</p>
                        </div>
                    </div>
                </div>
                <button className="addCartButton" primary={true}>{convertUSD(total)} - Add to cart</button>
            </div>
        </Container>
    )           
}

export default SingleProduct;
