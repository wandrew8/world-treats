import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
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
`;

const ButtonSecondary = styled.button`
    width: 240px;
    height: 50px;
    border-radius: 50px;
    border: solid blue 2px;
    display: block;
    margin: 10px auto;
    outline: none;
    cursor: pointer;
    background-color: white;
    color: blue;
`;

const SquareIconButton = styled.button`
    background: none;
    height: 35px;
    width: 35px;
    transition: 200ms ease-in;
    cursor: pointer;
    outline: none;
    border: solid lightgray 2px;
`;

const ButtonClose = styled.button`
    background: none;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
`;

const ButtonIcon = styled.button`
    background: none;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: solid lightgray 2px;
    margin: 0px 10px;
    cursor: pointer;
    outline: none;
`;

export function PrimaryButton(props) {
    return (
        <ButtonPrimary onClick={props.onClick ? props.onClick.bind(this) : null} >
            {props.children}
        </ButtonPrimary>
    )
}

export function SecondaryButton(props) {
    return (
        <ButtonSecondary onClick={props.onClick ? props.onClick.bind(this) : null}>
            {props.children}
        </ButtonSecondary>
    )
}

export function IconButtonSquare(props) {
    return (
        <SquareIconButton onClick={props.onClick ? props.onClick.bind(this) : null}>
            {props.children}
        </SquareIconButton>
    )
}

export function IconButton(props) {
    return (
        <ButtonIcon onClick={props.onClick ? props.onClick.bind(this) : null}>
            {props.children}
        </ButtonIcon>
    )
}

export function CloseButton(props) {
    return (
        <ButtonClose onClick={props.onClick ? props.onClick.bind(this) : null}>
            {props.children}
        </ButtonClose>
    )
}