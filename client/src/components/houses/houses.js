import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { css } from '@emotion/core';
import { HouseContext } from '../../provider';
import { minScreenSize } from '../../data/constants';
import Figure from './figure';
import useIO from '../hooks/io';

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
        threshold: 0.15,
        root: null
    })

    useLayoutEffect(() => {
        if (houses.length) {
            const houseCards = Array.from(document.querySelectorAll('li[data-io] img'));
            setElements(houseCards);
        }
    }, [houses])

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                observer.unobserve(entry.target);
          }
        })
    }, [entries, observer])

    return (
        <>
            <ul css={container}>{
                houses.length ? houses.map(house => {
                    return (
                        <li css={item} data-io key={house.id}>
                            <Figure {...house}/>
                        </li>
                    );
                }) :
                'No houses match your search criteria'
            }</ul>
        </>
    );
}
