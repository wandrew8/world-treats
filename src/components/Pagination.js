import React from 'react';
import {IconButtonSquare } from '../components/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const PaginationComponent = styled.nav`
    display: flex;
    justify-content: space-between;
    .icon {
        color: lightgray;
    }
    .pages {
        display: flex;
        button {
            margin: 0rem 0.2rem;
        }
        .selected {
            box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        }
    }
`;

const Pagination = (props) => {
    const { currentPage, pages, getProductsByPage } = props;
    console.log(currentPage)
    return (
        <PaginationComponent>
            <Link><IconButtonSquare disabled={currentPage > 1}><FontAwesomeIcon className="icon" icon={faArrowLeft}></FontAwesomeIcon></IconButtonSquare></Link>
                <div className="pages">
                    {pages.map(page => {
                        return (
                            <IconButtonSquare className="selected" key={page} onClick={() => getProductsByPage(page)}>{page}</IconButtonSquare>
                        )
                    })}
                </div>
            <Link><IconButtonSquare><FontAwesomeIcon className="icon" icon={faArrowRight}></FontAwesomeIcon></IconButtonSquare></Link>
        </PaginationComponent>
    )
}

export default Pagination;
