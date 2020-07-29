import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Select from '../select';

describe('Select component', () => {
    test('renders', () => {
        const props = {
            labelText: 'Select your Country',
            id: 'city',
            handleChange: jest.fn(),
            dataArray: ['aruba', 'jamaica', 'oooh i wanna take ya']
        }

        const { getByLabelText } = render(<Select {...props} />)
        const select = getByLabelText(/select your country/i);
        expect(select).toBeVisible('aruba')
    })

    test('handles on change', () => {
        const props = {
            labelText: 'Select your Country',
            id: 'city',
            handleChange: jest.fn(),
            dataArray: ['aruba', 'jamaica', 'oooh i wanna take ya']
        }

        const { getByLabelText } = render(<Select {...props} />)
        const select = getByLabelText(/select your country/i);
        expect(select).toHaveValue('aruba');

        user.selectOptions(select, 'jamaica');

        expect(select).toHaveValue('jamaica');
    })
})
