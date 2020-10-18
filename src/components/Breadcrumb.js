import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { capitalize } from '../utilities/utilityFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Crumbs = styled.nav`
    color: lightgray;
    font-weight: 700;
    margin: 2rem 0rem;
    a {
        text-decoration: none;
        transition: 200ms ease-in;
        color: lightgray;
        &:hover {
            text-decoration: underline;
        }
    }
    .icon {
        margin: 0 10px;
    }
    .current {
        color: black;
    }
`;

const Breadcrumb = ({ category, name }) => {
    return (
        <Crumbs>
            <Link to="/">Home</Link><FontAwesomeIcon icon={faChevronRight} className="icon"></FontAwesomeIcon><Link to="/products">All</Link><FontAwesomeIcon icon={faChevronRight} className="icon"></FontAwesomeIcon><Link to={`/category/${category}`}>{capitalize(category)}</Link><FontAwesomeIcon icon={faChevronRight} className="icon"></FontAwesomeIcon><span className="current">{name}</span>
        </Crumbs>
    )
}

export default Breadcrumb;
