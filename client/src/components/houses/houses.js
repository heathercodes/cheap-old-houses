/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { css } from '@emotion/react';
import { HouseContext } from '../../provider';
import { minScreenSize } from '../../data/constants';
import Figure from './figure';
import useIO from '../hooks/io';

const container = css`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 12px;
    row-gap: 12px;
`;

const item = css`
    list-style-type: none;
    @media (max-width: ${minScreenSize}px) {
        width: 100%;
        margin: 0 0 12px;
    }
`;

const loadMoreButton = css`
    width: 100%;
    margin: 15px auto;
    background: none;
    padding: 10px 20px;
    cursor: pointer;
    color: #BC4915;
    border: #BC4915 2px solid;
`;

export default function Houses() {
    const houseContext = useContext(HouseContext);
    const [limit, setLimit] = useState(6);
    const { houses } = houseContext;
    const [observer, setElements, entries] = useIO({
        threshold: 0.15,
        root: null
    })

    useLayoutEffect(() => {
        if (houses.length) {
            const houseCards = Array.from(document.querySelectorAll('li[data-io] img'));
            setElements(houseCards);
        }
    }, [houses, limit])

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                observer.unobserve(entry.target);
          }
        })
    }, [entries, observer])

    const loadMore = () => {
        setLimit(prevLimit => prevLimit + 6);
    }

    return (
        <>
            <ul css={container}>{
                houses.length && houses.slice(0, limit).map(house => {
                    return (
                        <li css={item} data-io key={house.id}>
                            <Figure {...house}/>
                        </li>
                    );
                })
            }</ul>
            {
                houses.length &&
                    <button
                        css={loadMoreButton}
                        onClick={loadMore}
                    >
                            Load More
                    </button>
            }
        </>
    );
}
