/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from 'react';
import { css } from '@emotion/react';
import { US, CA, minScreenSize } from '../../data/constants';
import { HouseContext } from '../../provider';
import Input from './generic/input';
import Select from './generic/select';
import Search from './generic/search';
import RegionSelect from './region-select';
import { searchForHouses } from '../../request';
import { formatCity, formatRegion, formatPrice } from '../../utils/format-input';
import { disableRegion, disableCity, disablePrice, disableSearch } from '../../utils/disable-input';

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
    const [searchParams, setSearchParams] = useState({});
    const { setHouses } = useContext(HouseContext);

    const handleChange = (value) => {
        setSearchParams(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();

        const results = await searchForHouses(searchParams);
        setHouses(results);

        setCountry(null);
        setSearchParams({});
    };

    return (
        <form method="GET" onSubmit={onSubmit} css={formContainer}>
            <fieldset disabled={disableRegion(searchParams)} css={searchField}>
                <Select
                    id="country"
                    labelText="Select your Country"
                    handleChange={(e) => setCountry(e.target.value)}
                    dataArray={[null, US, CA]}
                />

                {
                    country && (
                        <RegionSelect
                            country={country}
                            handleChange={(e) => handleChange(formatRegion(e))}
                        />
                    )
                }
            </fieldset>

            <div>
                <p>OR</p>
            </div>

            <Input
                disabled={disableCity(searchParams)}
                type="text"
                id="city"
                name="city"
                handleChange={(e) => handleChange(formatCity(e))}
                labelText="Search by City"
            />

            <div>
                <p>OR</p>
            </div>

            <Input
                disabled={disablePrice(searchParams)}
                type="text"
                id="price"
                name="price"
                handleChange={(e) => handleChange(formatPrice(e))}
                labelText="Search by Price"
            />

            <Search
                disabled={disableSearch(searchParams)}
                id="search"
                name="search"
                type="submit"
                onSubmit={(e) => onSubmit(e)}
            />
        </form>
    );
}
