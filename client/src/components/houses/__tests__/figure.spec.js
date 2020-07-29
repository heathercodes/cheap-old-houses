import React from 'react';
import { render } from '@testing-library/react';
import Figure from '../figure';

describe('figure component', () => {
    test('renders', () => {
        const props = {
            image: 'src',
            link: 'url',
            address: '123 Main St',
            region: 'CO',
            price: 85000,
            city: 'Salt Lake'
        }

        const { getByText, getByAltText } = render(<Figure {...props} />)

        const address = getByText('123 Main St, Salt Lake, CO');
        const altText = getByAltText('Listing: 123 Main St, Salt Lake, CO')

        expect(address).toHaveTextContent('123 Main St, Salt Lake, CO');
        expect(altText).toBeInTheDocument();
    })
})
