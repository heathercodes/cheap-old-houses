/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const labelStyles = css`
    margin-bottom: 15px;
    text-align: center;
    display: block;
`;

const selectStyles = css`
    border: #643711 2px solid;
    padding: 0;
    display: block;
    appearance: none;
    background-color:  #F8F4ED;
    margin: 0 auto;
    width: 70%;
`;

export default function Select({ handleChange, id, dataArray, labelText }) {
    return (
        <>
            <label htmlFor={id} css={labelStyles}>{labelText}</label>
            <select id={id} onChange={handleChange} css={selectStyles}>
                {
                    dataArray.map((datum) => {
                        return (
                            <option key={datum} value={datum} aria-label={datum}>{datum}</option>
                        );
                    })
                }
            </select>
        </>
    );
}

Select.propTypes = {
    dataArray: PropTypes.array.isRequired,
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
