import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Header from './header';
import Form from './form/form';
import Houses from './houses/houses';
import { Provider } from '../provider';

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
`;

// TODO tests for components
// TODO tests for utils
// TODO styles

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
