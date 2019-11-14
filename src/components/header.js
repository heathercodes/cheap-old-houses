import React from 'react';
import { css } from '@emotion/core';
import { minScreenSize } from '../data/constants';

const header = css`
    position: relative;
    height: 40vh;
    width: 50%;
    margin: 0 auto;
    @media (max-width: ${minScreenSize}px) {
        width: 100%;
        height: auto;
        margin-top: 40px
    }
`;

const titleText = css`
    font-family: 'Lobster', 'cursive';
    position: absolute;
    font-size: 100px;
    margin: 0;
    color: #B04F10;
    @media (max-width: ${minScreenSize}px) {
        position: static;
        font-size: 65px;
        text-align: center;
    }
`;

const first = css`
    top: 25px;
`;

const second = css`
    top: 113px;
    left: 140px;
`;

const third = css`
    top: 185px;
    right: 0;
`;

const subTitle = css`
    text-align: center;
    font-size: 28px;
    margin: 15px 0px 70px;
    @media (max-width: ${minScreenSize}px) {
        font-size: 20px;
    }
`;

export default function Header() {
    return (
        <>
            <header css={header}>
                <h1 css={[titleText, first]}>Cheap</h1>
                <h1 css={[titleText, second]}>Old</h1>
                <h1 css={[titleText, third]}>Houses</h1>
            </header>

            <section>
                <p css={subTitle}>Find your own fixer-upper!</p>
            </section>
        </>
    );
}
