import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { states, provinces } from '../../data/states-provinces';
import { US } from '../../data/constants';
import Select from './generic/select';

const container = css`
    padding-top: 20px;
`;

export default function RegionSelect({ country, handleChange }) {
    return (
        <div css={container}>
            {
                country === US ?
                    (
                        <>
                            <Select
                                id="state"
                                labelText="Search by State"
                                handleChange={handleChange}
                                dataArray={states}
                            />
                        </>
                    ) : (
                        <>
                            <Select
                                id="province"
                                labelText="Search by Province"
                                handleChange={handleChange}
                                dataArray={provinces}
                            />
                        </>
                    )
            }
        </div>
    );
}

RegionSelect.propTypes = {
    country: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};
