import React, { useState } from "react";
import styled from 'styled-components';

const Image = ({ thumb, src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
        <Thumbnail
            className="image thumb"
            alt={alt}
            src={thumb}
            isLoaded={isLoaded}
        />
        <Main
            onLoad={() => {
            setIsLoaded(true);
            }}
            className="image full"
            style={{ opacity: isLoaded ? 1 : 0 }}
            alt={alt}
            src={src}
        />
    </>
  );
};


const Thumbnail = styled.img`
    opacity: ${props => props.isLoaded ? 0 : 1}; 
    filter: blur(10px);
    object-fit: cover;
    position: absolute;
    overflow: hidden;
    transform: scale(1);
    transition: ease-in 200ms;

`;

const Main = styled.img`
    transition: ease-in 200ms;
`;
export default Image;