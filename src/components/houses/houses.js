import React, { useContext, lazy, Suspense, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import json from '../../data/old-houses-short.json';
import filterData from '../../utils/filter-data';
import { HouseContext } from '../../provider';

const Figure = lazy(() => import('./figure'));
const renderLoader = () => <p>Loading...</p>;

const container = css`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Houses() {
    const [filteredHouses, setFilteredHouses] = useState(null);
    const houseContext = useContext(HouseContext);
    const { searchCriteria } = houseContext;

    useEffect(() => {
        setFilteredHouses(filterData(searchCriteria, json));
    }, [searchCriteria]);

    return (
        <>
            {
                Object.entries(searchCriteria).length !== 0 ? (
                    <ul css={container}>{
                        filteredHouses.map(({image, location, price, link}) => {
                            return (
                                <Suspense fallback={renderLoader()} key={location} >
                                    <Figure image={image} location={location} price={price} link={link} />
                                </Suspense>
                            );
                        })
                    }</ul>
                ) : null
            }
        </>
    );
}
