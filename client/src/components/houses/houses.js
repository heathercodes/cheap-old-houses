import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { css } from '@emotion/core';
import { HouseContext } from '../../provider';
import { minScreenSize } from '../../data/constants';
import useIO from '../hooks/io';

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

const item = css`
    list-style-type: none;
    width: 30%;
    margin: 0 12px 12px;
    &:nth-child(3n + 1) {
        margin-left: 0px
    }
    &:nth-child(3n) {
        margin-right: 0px
    }
    @media (max-width: ${minScreenSize}px) {
        width: 100%;
        margin: 0 0 12px;
    }
`;

export default function Houses() {
    const houseContext = useContext(HouseContext);
    const { houses } = houseContext;
    const [observer, setElements, entries] = useIO({
        threshold: 0.5,
        root: null
    })

    useEffect(() => {
        if (houses.length) {
            // wait for DOM to update
            setTimeout(() => {
                const houseCards = Array.from(document.querySelectorAll('li[data-io]'));
                setElements(houseCards);
            }, 1000)
        }
    }, [houses])

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target);
                observer.unobserve(entry.target);
          }
        })
    }, [entries, observer])

    return (
        <>
            <ul css={container}>{
                houses.length ? houses.map(house => {
                    return (
                        <Suspense fallback={renderLoader()} key={house.id}>
                            <li css={item} data-io>
                                <Figure {...house}/>
                            </li>
                        </Suspense>
                    );
                }) :
                'No houses match your search criteria'
            }</ul>
        </>
    );
}
