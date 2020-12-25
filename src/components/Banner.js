import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    background: ${props => props.theme.primary};
    color: #f4f4f4;
    padding: 0.5em 0.7em;
    font-weight: 900;
    letter-spacing: 0.2em;
    font-size: 1.5rem;
    width: fit-content;
    border-radius: 5px;
  }
`;

const Banner = ({ country }) => {
    return (
        <StyledBanner>
            <div>Product of {country}</div>
        </StyledBanner>
    )
}

export default Banner;
