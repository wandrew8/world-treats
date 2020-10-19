import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
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
`;

const ButtonSecondary = styled.button`
    width: 240px;
    height: 50px;
    border-radius: 50px;
    border: solid ${props => props.theme.primary} 2px;
    display: block;
    margin: 10px auto;
    outline: none;
    cursor: pointer;
    background-color: white;
    color: ${props => props.theme.primary};
`;

const ButtonTag = styled.button`
    width: 145px;
    height: 50px;
    border-radius: 50px;
    padding: 5px;
    border: solid ${props => props.theme.primary} 1px;
    display: block;
    margin: 10px auto;
    outline: none;
    cursor: pointer;
    background-color: ${ props => props.selected === true ? props.theme.primary : "white"};
    color: ${props => props.selected === true ? "white" : props.theme.primary};
    transition: 300ms ease-in;
    &:hover {
        background-color: ${props => props.theme.primary};
        color: white;
    }
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

const ButtonInvisible = styled.button`
    background: none;
    outline: none;
    cursor: pointer;
    border: none;
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
        <ButtonIcon selected={props.selected} onClick={props.onClick ? props.onClick.bind(this) : null}>
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

export function InvisibleButton(props) {
    return (
        <ButtonInvisible onClick={props.onClick ? props.onClick.bind(this) : null}>
            {props.children}
        </ButtonInvisible>
    )
}

export function TagButton(props) {
    return (
        <ButtonTag selected={props.selected} onClick={props.onClick ? props.onClick.bind(this) : null}>
            {props.children}
        </ButtonTag>
    )
}