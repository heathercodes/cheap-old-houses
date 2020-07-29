import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Input from '../input';

describe('input component', () => {
    test('renders text input', () => {
        const props = {
            disabled: false,
            labelText: 'Search by City',
            type: 'text',
            id: 'city',
            name: 'city',
            handleChange: jest.fn(),
            labelIsHidden: true,
            styles: {}
        }

        const { getByLabelText } = render(<Input {...props} />)
        const input = getByLabelText(/search by city/i);
        expect(input).toHaveAttribute('type', 'text');
    })

    test('handles on change', () => {
        const props = {
            disabled: false,
            labelText: 'Search by Price',
            type: 'text',
            id: 'price',
            name: 'price',
            handleChange: jest.fn(),
            labelIsHidden: true,
            styles: {}
        }

        const { getByLabelText } = render(<Input {...props} />)
        const input = getByLabelText(/search by price/i);
        expect(input).not.toHaveValue();

        user.type(input, '78000');

        expect(input).toHaveValue('78000');
    })

    test('handles disable', () => {
        const props = {
            disabled: false,
            labelText: 'Search by Region',
            type: 'text',
            id: 'region',
            name: 'region',
            handleChange: jest.fn(),
            labelIsHidden: false,
            styles: {}
        }

        const { getByLabelText, rerender } = render(<Input {...props} />)
        const input = getByLabelText(/search by region/i);

        expect(input).not.toBeDisabled();

        rerender(<Input {...props} disabled={true}/>);

        expect(input).toBeDisabled();
    })
})
