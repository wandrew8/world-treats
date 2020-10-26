import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterStyling = styled.footer`
    width: 100%;
    color: white;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
    background-color: ${props => props.theme.primary};
    h1 {
        color: white;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }
`;

const Footer = () => {
    return (
        <FooterStyling>
            <h1>Footer Component</h1>
            <div className="container">
                <div>
                    <h2>Shop By Category</h2>
                        <Link to="/category/chips">Chips & Snacks</Link>
                        <Link to="/category/candy">Candy</Link>
                        <Link to="/category/cake">Cakes & Cookies</Link>
                        <Link to="/category/chocolate">Chocolate</Link>
                </div>
                <div>
                    <h2>About Us</h2>
                        <p>World Treats is a fictitous e-commerce store build as a side-project in my spare time to continue to level up my coding abilities</p>
                </div>
                <div>

                </div>
            </div>
            <hr />
            <h3>Copyright &#169; { new Date().getFullYear()}</h3>
        </FooterStyling>
    )
}

export default Footer;
