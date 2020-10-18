import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  background: ${props => props.theme.primary};
  display: inline-block;
  text-align: left;
  color: #f4f4f4;
  padding: 0.5em 0.7em;
  font-weight: 900;
  letter-spacing: 0.2em;
  position: absolute;
  font-size: 1.5rem;
  top: 0;
  right: 0;
  border-radius: 5px;
`;

const Banner = ({ country }) => {
    return (
        <StyledBanner>
            Product of {country}
        </StyledBanner>
    )
}

export default Banner;
