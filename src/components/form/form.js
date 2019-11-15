import React, { useState, useContext } from 'react';
import { css } from '@emotion/core';
import { US, CA, minScreenSize } from '../../data/constants';
import { HouseContext } from '../../provider';
import Input from './generic/input';
import Select from './generic/select';
import Search from './generic/search';
import RegionSelect from './region-select';

const formContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 35px 0 60px;
`;

const searchField = css`
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

export default function Form() {
    const [country, setCountry] = useState(null);
    const [region, setRegion] = useState(null);
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
            searchRegion: region,
            searchCity: city,
            searchPrice: price
        });

        setCountry(null);
        setRegion(null);
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
                        <RegionSelect
                            country={country}
                            handleChange={(e) => handleChange(e, setRegion)}
                        />
                    )
                }
            </fieldset>

            <div>
                <p>OR</p>
            </div>

            <Input
                disabled={Boolean(region || price)}
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
                disabled={Boolean(region || city)}
                type="text"
                id="price"
                name="price"
                handleChange={(e) => handleChange(e, setPrice)}
                labelText="Search by Price"
            />

            <Search
                disabled={Boolean(!region && !city && !price)}
                id="search"
                name="search"
                type="submit"
                onSubmit={(e) => onSubmit(e)}
            />
        </form>
    );
}
