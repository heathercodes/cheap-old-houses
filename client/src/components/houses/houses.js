import React, { useContext, lazy, Suspense } from 'react';
import { css } from '@emotion/core';
import { HouseContext } from '../../provider';

const Figure = lazy(() => import('./figure'));
const renderLoader = () => <p>Loading...</p>; // TODO a better loader

// TODO use CSS Grid
const container = css`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Houses() {
    const houseContext = useContext(HouseContext);
    const { houses } = houseContext;

    return (
        <>
            <ul css={container}>{
                houses.length ? houses.map(house => {
                    return (
                        <Suspense fallback={renderLoader()} key={house.id} >
                            <Figure {...house} />
                                </Suspense>
                            );
                        }) :
                    'No houses match your search criteria'
            }</ul>
        </>
    );
}
