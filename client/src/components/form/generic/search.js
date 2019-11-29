import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Input from './input';
import { minScreenSize } from '../../../data/constants';

const searchButton = css`
    width: 100%;
    display: flex;
    margin: 10vh 0 0;
    input {
        margin: 0 auto;
        background: none;
        padding: 10px 20px;
        cursor: pointer;
        color: #BC4915;
        border: #BC4915 2px solid;
        width: initial;
        &:disabled {
            color: #b78e7c;
            border: #b78e7c 2px solid;
            cursor: not-allowed;
        }
    }
    @media (max-width: ${minScreenSize}px) {
        margin: 40px 0 0;
    }
`;

export default function Search({ disabled, type, id, name, onSubmit }) {
    return (
        <Input
            styles={searchButton}
            disabled={disabled}
            handleChange={onSubmit}
            type={type}
            id={id}
            name={name}
            labelText="Search"
            value="Search"
            labelIsHidden
        />
    );
}

Search.propTypes = {
    disabled: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};
