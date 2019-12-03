import { PRICE, CITY, REGION } from '../data/constants';

export const disableRegion = (searchParams) => Boolean(Object.keys(searchParams)[0] === CITY) || Boolean(Object.keys(searchParams)[0] === PRICE);

export const disableCity = (searchParams) => Boolean(Object.keys(searchParams)[0] === REGION) || Boolean(Object.keys(searchParams)[0] === PRICE);

export const disablePrice = (searchParams) => Boolean(Object.keys(searchParams)[0] === CITY) || Boolean(Object.keys(searchParams)[0] === REGION);

export const disableSearch = (searchParams) => Boolean(!Object.keys(searchParams).length);
