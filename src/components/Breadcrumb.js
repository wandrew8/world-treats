import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { capitalize } from '../utilities/utilityFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Crumbs = styled.nav`
    color: lightgray;
    font-weight: 700;
    max-width: 900px;
    margin: 2rem auto;
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
            <Link to="/">Home</Link><FontAwesomeIcon icon={faChevronRight} className="icon"></FontAwesomeIcon><Link to="/products"><span className={!name && !category ? "current" : ""}>All</span></Link>{ category ? <span><FontAwesomeIcon icon={faChevronRight} className="icon"></FontAwesomeIcon><Link to={`/category/${category}`}><span className={name ? "" : "current"}>{capitalize(category)}</span></Link></span> : null }{name ? <span><FontAwesomeIcon icon={faChevronRight} className="icon"></FontAwesomeIcon><span className="current">{name}</span></span> : null }
        </Crumbs>
    )
}

export default Breadcrumb;
