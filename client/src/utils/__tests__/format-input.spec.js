import { formatCity, formatPrice, formatRegion } from '../format-input';

describe('format user inputs', () => {
    test('format city', () => {
        const e = {
            target: {
                id: 'city',
                value: 'Detroit',
            }
        }
        expect(formatCity(e)).toStrictEqual({
            city: 'detroit'
        });
    });

    test('format price', () => {
        const e = {
            target: {
                id: 'price',
                value: '45000',
            }
        }
        expect(formatPrice(e)).toStrictEqual({
            price: 45000,
        });
        expect(formatPrice(e)).not.toStrictEqual({
            price: '45000',
        });
    });

    test('format region', () => {
        const e = {
            target: {
                id: 'region',
                value: 'co',
            }
        }
        expect(formatRegion(e)).toStrictEqual({
            region: 'CO'
        });
    });
})
