import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { minScreenSize } from '../../data/constants';

const figureStyle = css`
    margin: 0;
    width: 100%;
    background-color: #E1821E;
    padding: 8px;
    border-radius: 3px;
    min-height: 340px;
    @media (min-width: 1040px) and (max-width: 1441px) {
        min-height: 420px;
    }
    @media (max-width: ${minScreenSize}px) {
        min-height: 295px;
    }
`;

const linkStyle = css`
    display: block;
    text-decoration: none;
`;

const imgStyle = css`
    width: 100%;
`;

const text = css`
    padding: 18px 9px;
    text-align: center;
    p {
        margin: 8px
    }
`;

export default function Figure({ image, link, address, region, price, city }) {
    return (
        <figure css={figureStyle}>
                <a href={link} css={linkStyle} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={`Listing: ${address}, ${city}, ${region}`} css={imgStyle} />
                </a>
                <figcaption css={text}>
                    <p>{address}, {city}, {region}</p>
                    <p>${price}</p>
                </figcaption>
        </figure>
    );
}

Figure.propTypes = {
    image: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number,
    link: PropTypes.string.isRequired
};
