import React from 'react';
import { css } from '@emotion/core';

const header = css`
    position: relative;
    height: 40vh;
`;

const titleText = css`
    font-family: 'Lobster', 'cursive';
    position: absolute;
    font-size: 100px;
    margin: 0;
    color: #B04F10;
`;

const first = css`
    top: 25px;
    left: 35px;
`;

const second = css`
    top: 95px;
    left: 262px;
`;

const third = css`
    top: 145px;
    right: 60px;
`;

const subTitle = css`
    text-align: center;
    font-size: 28px;
    margin: 15px 0px 70px;
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
