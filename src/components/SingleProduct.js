import React, { useState } from 'react';
import styled from 'styled-components';
import convertUSD from '../utilities/convertUSD';
import { animated, useTransition } from 'react-spring'
import Banner from './Banner';
import Breadcrumb from './Breadcrumb';
import { IconButton, PrimaryButton, InvisibleButton } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin: 3rem 0rem;
    h1 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    .description {
        margin: 2rem 0rem;
        font-size: 1.1rem;
    }
    .mainImage {
        width: 400px;
        height: 400px;
        object-fit: cover;
        margin: 0 auto;
    }
    .imageGallery {
        display: flex;
        align-items: center;
        margin: 1rem 0rem;
        img {
            position: relative;
            cursor: pointer;
            box-sizing: content-box;

            width: 125px;
            height: 125px;
            margin-right: 10px;
            padding: 5px;
            transition: border-bottom 200ms ease-in;
        }
    }
    .currentImage {
        box-sizing: content-box;
        height: 115px !important;
        width: 115px !important;
        border-bottom: solid ${props => props.theme.primary} 5px;
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
        .quantity {
            text-align: left;
            font-size: 1.2rem;
        }
    }
    .addCartButton {
        width: 240px;
        height: 50px;
        border-radius: 50px;
        border: solid ${props => props.theme.primary} 2px;
        display: block;
        margin: 10px auto;
        outline: none;
        cursor: pointer;
        background-color: ${props => props.theme.primary};
        color: white;
    }
    .ingredientsTitle {
        font-weight: 700;
        color: lightgray;
    }
    .icon {
        margin-left: 10px;
    }
    .ingredientsContainer {
        border: solid 1px lightgray;
        padding: 10px;
        border-radius: 10px;
    }
    .ingredients {
        display: flex;
        flex-flow: row wrap;
        p {
            margin: 3px 2px;
        }
    }
`;

const SingleProduct = ({ product, addToCart }) => {
    const [ quantity, setQuantity ] = useState(1);
    const { allergens, category, country, description, imageGallery, ingredients, inventory, mainImage, name, packageDescription, packageType, price, size, subtitle } = product;
    const defaultImage = mainImage ? mainImage : "https://images.unsplash.com/photo-1534119428213-bd2626145164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2936&q=80";
    const [ displayImage, setDisplayImage ] = useState(defaultImage);
    const [ total, setTotal ] = useState(price * quantity);
    const [ showIngredients, setShowIngredients ] = useState(false);
    const transitions = useTransition(showIngredients, null, {
        from: { opacity: 0, transform: "translateY(-10px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-10px)" }
    });
    const decrementQuantity = () => {
        if(quantity - 1 > 0) {
            setQuantity(quantity - 1)
            setTotal((quantity - 1) * price)
        } 
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        setTotal((quantity + 1) * price)
    }

    const cart = () => {
        const cartItem = {
            product: product,
            quantity: quantity
        }
        addToCart(cartItem);
    }

    const formatText = () => {
        if (allergens.length === 1) {
            return allergens[0];
        } else if (allergens.length === 2) {
            return allergens.map((allergen, index) => {
               return <span>{index === 0 ? allergen : ` and ${allergen}`}</span>
            })
        } else if (allergens.length > 2) {
            const lastIndex = allergens.length - 1;
            return allergens.map((allergen, index) => {
                return <span>{index === lastIndex ? ` and ${allergen}` : `${allergen},`}</span>
            });
        }
    }
    
    return (
        <>
        <Banner country={country} />
        <Breadcrumb category={category} name={name}/>
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
                <p className="description">{description}</p>
                <div className="select-quantity">
                    <p>Select Quantity</p>
                    <div className="quantity-container">
                        <div>
                            <IconButton onClick={() => decrementQuantity()}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></IconButton>
                            {quantity}
                            <IconButton onClick={() => incrementQuantity()}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></IconButton>
                        </div>
                        <div className="quantity">
                            <p>{packageDescription}</p>
                            <p>{convertUSD(price)} per {packageType}</p>
                        </div>
                    </div>
                </div>
                <PrimaryButton onClick={() => cart()}>{convertUSD(total)} - Add to cart</PrimaryButton>
                <InvisibleButton onClick={() => setShowIngredients(!showIngredients)}>
                    <p className="ingredientsTitle">
                        Ingredients 
                        {showIngredients ? <FontAwesomeIcon className="icon" icon={faMinus}></FontAwesomeIcon> : <FontAwesomeIcon className="icon" icon={faPlus}></FontAwesomeIcon>}
                    </p>
                </InvisibleButton>
                { transitions.map(({ item, key, props}) => {
                    return item && <animated.div key={key} style={props} className="ingredientsContainer">
                        <div className="ingredients">
                            { ingredients ? ingredients.map((ingredient, index) => {
                                const lastItem = ingredients.length - 1;
                                return (
                                    <p>{index === lastItem ? ` and ${ingredient}` : `${ingredient},` }</p>
                                )
                            }) : null}
                            </div>
                            {allergens ? <p>Allergens: {formatText()}</p> : null }
                        </animated.div>})
                    }
            </div>
        </Container>
        </>
    )           
}

export default SingleProduct;
