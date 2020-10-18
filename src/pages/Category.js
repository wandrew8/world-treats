import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components';
import Hero from '../components/Hero';

const MainContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
`;

const Category = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    let { categoryName } = useParams();
    
    useEffect(() => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = `https://world-treats-api.herokuapp.com/products/category/${categoryName}`;
        fetch(proxy + url)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          setProducts(response)
          setIsLoading(false);
        })
        .catch(err => console.log(err))
      }, [categoryName]);

    return (
        <>
        <Breadcrumb category={categoryName}/>
        <Hero category={categoryName} />
        <MainContainer>
            { isLoading && <Spinner />}
            {products.map(item => {
                return (
                    <h2>{item.name}</h2>
                )
            })}
        </MainContainer>
        </>
    )
}

export default Category;
