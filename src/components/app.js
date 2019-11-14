import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Header from './header';
import Form from './form/form';
import Houses from './houses/houses';
import { Provider } from '../provider';
import { minScreenSize } from '../data/constants';

const body = css`
    ${emotionNormalize}
    html,
    body {
        font-family: 'Josefin Sans', sans-serif;
        background-color: #F8F4ED;
    }
`;

const wrapper = css`
    width: 70%;
    margin: 0 auto;
    max-width: 1080px;
    @media (max-width: ${minScreenSize}px) {
        width: 80%;
    }
`;

// TODO tests for components
// TODO tests for utils
// TODO media queries

export default function App() {
    return (
        <>
            <Global
                styles={body}
            />
            <Provider>
                <div css={wrapper}>
                    <Header />
                    <Form />
                    <Houses />
                </div>
            </Provider>
        </>
    );
}
