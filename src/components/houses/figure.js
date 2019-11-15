import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { minScreenSize } from '../../data/constants';

const item = css`
    list-style-type: none;
    width: 30%;
    margin: 0 12px 12px;
    &:nth-child(3n + 1) {
        margin-left: 0px
    }
    &:nth-child(3n) {
        margin-right: 0px
    }
    @media (max-width: ${minScreenSize}px) {
        width: 100%;
        margin: 0 0 12px;
    }
`;

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

export default function Figure({ image, link, location, price }) {
    return (
        <li css={item}>
            <figure css={figureStyle}>
                <a href={link} css={linkStyle} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={`Listing: ${location}`} css={imgStyle} />
                </a>
                <figcaption css={text}>
                    <p>{location}</p>
                    <p>{price}</p>
                </figcaption>
            </figure>
        </li>
    );
}

Figure.propTypes = {
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
