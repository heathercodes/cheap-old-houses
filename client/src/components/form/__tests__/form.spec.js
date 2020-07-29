import React from 'react';
import user from '@testing-library/user-event';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { Provider, HouseContext } from '../../../provider';
import { searchForHouses as mockSearch } from '../../../request';
import Form from '../form';

jest.mock('../../../request');

afterEach(() => {
    jest.clearAllMocks();
});

describe('Form component', () => {
    test('renders with inputs and submit button', () => {
        const { getByLabelText, getByRole } = render(<Form />);

        getByLabelText(/select your country/i);
        getByLabelText(/search by city/i);
        getByLabelText(/search by price/i);
        getByRole('button', 'search');
    });

    test('submit button is disabled until input is populated', () => {
        const { getByLabelText, getByRole } = render(<Form />);

        const submit = getByRole('button', 'search');
        const input = getByLabelText(/search by city/i);

        expect(submit).toBeDisabled();
        user.type(input, 'Detroit');
        expect(submit).not.toBeDisabled();
    });

    test('submit searches for houses', async () => {
        mockSearch.mockResolvedValueOnce([{}]);
        const { getByLabelText, getByRole } = render(<Provider value={HouseContext}><Form /></Provider>);

        const submit = getByRole('button', 'search');
        const input = getByLabelText(/search by price/i);

        user.type(input, '67000');
        act(() => {
            fireEvent.click(submit);
        });

        await waitFor(() => expect(mockSearch).toHaveBeenCalledWith({ price: 67000 }));
        await waitFor(() => expect(mockSearch).toHaveBeenCalledTimes(1));
    });
});
