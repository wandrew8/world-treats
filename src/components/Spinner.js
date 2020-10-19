import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const SpinnerContainer = styled.div`   
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%); 
    margin-top: 3rem;
    .circle{
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.primary};
    border-radius: 50%;
    animation: loading 1.5s cubic-bezier(.8, .5, .2, 1.4) infinite;
    transform-origin: bottom center;
    position: relative;
    }
    @keyframes loading{
    0%{
        transform: translateY(0px);
        background-color: ${props => lighten(0.1, props.theme.primary)};
    }
    50%{
        transform: translateY(50px);
        background-color: ${props => lighten(0.2, props.theme.primary)};
    }
    100%{
        transform: translateY(0px);
        background-color: ${props => lighten(0.3, props.theme.primary)};
    }
    }
    .circle-1{
    animation-delay: 0.1s;
    }
    .circle-2{
    animation-delay: 0.2s;
    }
    .circle-3{
    animation-delay: 0.3s;
    }
    .circle-4{
    animation-delay: 0.4s;
    }
    .circle-5{
    animation-delay: 0.5s;
    }
`;

const Spinner = () => {
    return (
        <SpinnerContainer>
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
            <span class="circle circle-5"></span>
        </SpinnerContainer>
    )
}

export default Spinner;
