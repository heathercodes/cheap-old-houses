import { disableRegion, disableCity, disablePrice, disableSearch } from '../disable-input';

describe('disabling inputs', () => {
    test('disable by city', () => {
        const searchParams = {
            city: 'Detroit',
        }
        expect(disableRegion(searchParams)).toBeTruthy();
        expect(disablePrice(searchParams)).toBeTruthy();
        expect(disableCity(searchParams)).toBeFalsy();
    });

    test('disable by price', () => {
        const searchParams = {
            price: 90000,
        }
        expect(disableRegion(searchParams)).toBeTruthy();
        expect(disablePrice(searchParams)).toBeFalsy();
        expect(disableCity(searchParams)).toBeTruthy();
    });

    test('disable by region', () => {
        const searchParams = {
            region: 'CO',
        }
        expect(disableRegion(searchParams)).toBeFalsy();
        expect(disablePrice(searchParams)).toBeTruthy();
        expect(disableCity(searchParams)).toBeTruthy();
    });

    test('disable search', () => {
        const searchParams = {};

        expect(disableSearch(searchParams)).toBeTruthy();
    });
})
