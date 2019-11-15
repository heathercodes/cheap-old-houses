import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { minScreenSize } from '../../../data/constants';

const inputStyles = css`
    border: 0;
    padding: 0;
    display: block;
    appearance: none;
    background-color:  #F8F4ED;
    border-bottom: #643711 2px solid;
    margin: 0 auto;
    width: 70%;
    @media (max-width: ${minScreenSize}px) {
        margin-bottom: 40px;
    }
`;

const labelStyles = css`
    margin-bottom: 15px;
    text-align: center;
    display: block;
`;

const fieldStyles = css`
    border: 0;
    margin: 0;
    padding: 0;
    width: 30%;
    display: flex;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.4
    }
    @media (max-width: ${minScreenSize}px) {
        width: 100%;
        margin-bottom: 40px;
    }
`;

const accessiblyHidden = css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1;
    margin: -1;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1;
`;

export default function Input({ disabled, labelText, type, id, name, handleChange, labelIsHidden, styles }) {
    const isHidden = labelIsHidden ? accessiblyHidden : labelStyles;
    return (
        <fieldset disabled={disabled} css={[fieldStyles, styles]}>
            <label htmlFor={id} css={isHidden}>{labelText}</label>
            <input type={type} id={id} name={name} onChange={handleChange} css={inputStyles} />
        </fieldset>
    );
}

Input.propTypes = {
    labelIsHidden: PropTypes.bool,
    styles: PropTypes.object,
    disabled: PropTypes.bool.isRequired,
    labelText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
