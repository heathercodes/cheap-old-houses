import { expect } from 'chai';
import filterBetween from '../filter-between-numbers';

describe('filters houses between a number range', () => {
    it('filters a house within range', () => {
        const searchPrice = '45,000';
        const housePrice = '$59,900';

        expect(filterBetween(searchPrice, housePrice)).to.eql(true);
    });

    it('filters out a house not in range', () => {
        const searchPrice = '45,000';
        const housePrice = '$105,000';

        expect(filterBetween(searchPrice, housePrice)).to.eql(false);
    });
});
