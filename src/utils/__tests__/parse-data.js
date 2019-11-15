import { expect } from 'chai';
import parseTextForData, { parseNumber } from '../parse-data';

describe('parse data functions', () => {
    it('parses the correct text from the text string', () => {
        const address = '400 Wall Ave, Pitcairn, PA\n$89,900';
        const data = {
            location: '400 Wall Ave, Pitcairn, PA',
            address: '400 Wall Ave',
            city: 'Pitcairn',
            state: 'PA',
            price: '$89,900'
        };

        expect(parseTextForData(address)).to.eql(data);
    });

    it('parses a integer from a number text field', () => {
        const price = '$89,900';
        const number = 89900;

        expect(parseNumber(price)).to.eql(number);
    });

    it('does not parse a string from a number text field', () => {
        const price = '$89,900';
        const string = '89900';

        expect(parseNumber(price)).to.not.eql(string);
    });
});
