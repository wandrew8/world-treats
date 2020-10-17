import React from 'react';
import styled from 'styled-components';
import convertUSD from '../utilities/convertUSD';
import { CloseButton, IconButton } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    padding: 10px 0px;
    position: relative;
    hr {
        width: 90%;
    }
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

const CartItem = ({item, removeItem}) => {
    const { price, name, amountOrdered, mainImage, packageDescription } = item
    return (
        <Container>
            <Item>
                <div>
                    <CloseButton onClick={() => removeItem(name)}><FontAwesomeIcon icon={faTimesCircle} /></CloseButton>
                    <img src={mainImage} alt={name} />
                </div>
                <div className="item-description">
                    <h3>{name}</h3>
                    <div className="total">
                        <p>{packageDescription} {convertUSD(price)}</p>
                        <div className="addItems">
                            <IconButton onClick={(e) => { e.preventDefault()}}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></IconButton>
                            {amountOrdered}
                            <IconButton onClick={(e) => { e.preventDefault()}}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></IconButton>
                        </div>
                    </div>
                </div>
            </Item>
            <hr />
        </Container>
    )
}

export default CartItem;
