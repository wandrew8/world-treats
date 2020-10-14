import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    padding: 10px 0px;
    position: relative;
    hr {
        width: 90%;
    }
`;

const CloseButton = styled.button`
    background: none;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
`;

const Button = styled.button`
    background: none;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin: 0px 10px;
`;

const Item = styled.div`
    display: grid; 
    grid-template-columns: 60px 1fr;
    grid-gap: 20px;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    h3 {
        margin: 0;
        margin-bottom: 10px;
        font-size: 1.2rem;
    }
    img {
        height: 60px;
        width: 60px;
        object-fit: cover;
    }
    .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
`;

const convertUSD = (num) => {
    const dollars = num / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

const CartItem = ({item, removeItem}) => {
    const { price, name, amountOrdered, image, packaging } = item
    return (
        <Container>
            <Item>
                <div>
                    <CloseButton className="cart" onClick={() => removeItem(name)}><FontAwesomeIcon icon={faTimesCircle} /></CloseButton>
                    <img src={image} alt={name} />
                </div>
                <div className="item-description">
                    <h3>{name}</h3>
                    <div className="total">
                        <p>{packaging} {convertUSD(price)}</p>
                        <div className="addItems">
                            <Button className="button" onClick={(e) => { e.preventDefault()}}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></Button>
                            {amountOrdered}
                            <Button className="button" onClick={(e) => { e.preventDefault()}}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
                        </div>
                    </div>
                </div>
            </Item>
            <hr />
        </Container>
    )
}

export default CartItem;
