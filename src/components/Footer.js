import React from 'react';
import styled from 'styled-components';

const FooterStyling = styled.footer`
    height: 500px;
    width: 100%;
    color: white;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
    background-color: ${props => props.theme.primary};
    h1 {
        color: white;
    }
`;

const Footer = () => {
    return (
        <FooterStyling>
            <h1>Footer Component</h1>
        </FooterStyling>
    )
}

export default Footer;
