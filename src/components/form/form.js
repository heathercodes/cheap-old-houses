import React, { useState, useContext } from 'react';
import { css } from '@emotion/core';
import { states, provinces } from '../../data/states-provinces';
import { US, CA, minScreenSize } from '../../data/constants';
import { HouseContext } from '../../provider';
import Input from './generic/input';
import Select from './generic/select';
import Search from './generic/search';

const formContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 35px 0 60px;
`;

const secondSection = css`
    padding-top: 20px;
`;

const searchField = css`
    border: 0;
    margin: 0;
    padding: 0;
    width: 30%;
    display: flex;
    &:disabled {
        cursor: not-allowed;
    }
    @media (max-width: ${minScreenSize}px) {
        width: 100%;
        margin-bottom: 40px;
    }
`;

export default function Form() {
    const [country, setCountry] = useState(null);
    const [province, setProvince] = useState(null);
    const [city, setCity] = useState(null);
    const [price, setPrice] = useState(null);

    const houseContext = useContext(HouseContext);
    const { setSearchCriteria } = houseContext;

    const handleChange = (e, callback) => {
        callback(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        setSearchCriteria({
            searchProv: province,
            searchCity: city,
            searchPrice: price
        });

        setCountry(null);
        setProvince(null);
        setCity(null);
        setPrice(null);
    };

    return (
        <form method="GET" onSubmit={onSubmit} css={formContainer}>
            <fieldset disabled={city || price} css={searchField}>
                <Select
                    id="country"
                    labelText="Select your Country"
                    handleChange={(e) => handleChange(e, setCountry)}
                    dataArray={[null, US, CA]}
                />

                {
                    country && (
                        <div css={secondSection}>
                            {
                                country === US ?
                                    (
                                        <>
                                            <Select
                                                id="state"
                                                labelText="Search by State"
                                                handleChange={(e) => handleChange(e, setProvince)}
                                                dataArray={states}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Select
                                                id="province"
                                                labelText="Search by Province"
                                                handleChange={(e) => handleChange(e, setProvince)}
                                                dataArray={provinces}
                                            />
                                        </>
                                    )
                            }
                        </div>
                    )
                }
            </fieldset>

            <div>
                <p>OR</p>
            </div>

            <Input
                disabled={Boolean(province || price)}
                type="text"
                id="city"
                name="city"
                handleChange={(e) => handleChange(e, setCity)}
                labelText="Search by City"
            />

            <div>
                <p>OR</p>
            </div>

            <Input
                disabled={Boolean(province || city)}
                type="text"
                id="price"
                name="price"
                handleChange={(e) => handleChange(e, setPrice)}
                labelText="Search by Price"
            />

            <Search
                disabled={Boolean(!province && !city && !price)}
                id="search"
                name="search"
                type="submit"
                onSubmit={(e) => onSubmit(e)}
            />
        </form>
    );
}
