import React from 'react';
import user from '@testing-library/user-event';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { searchForHouses as mockSearch } from '../../request';
import App from '../app';

jest.mock('../../request');

const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
  disconnect
}))

afterEach(() => {
    jest.clearAllMocks();
});

test('render app', async () => {
    mockSearch.mockResolvedValueOnce([
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '1' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '2' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '3' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '4' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '5' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '6' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '7' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '8' },
        { image: 'blob', link: 'url', address: '123 Main St', region: 'CO', price: 100200, city: 'Colorado', id: '9' },
    ]);

    const { getAllByAltText, getByRole, getByLabelText, getByText } = render(<App />);

    const submit = getByRole('button', 'search');
    const input = getByLabelText(/search by price/i);

    user.type(input, '67000');
    act(() => {
        fireEvent.click(submit);
    });

    await waitFor(() => expect(getAllByAltText(/listing.*?/i)).toHaveLength(6));

    const loadMore = getByText('Load More');

    act(() => {
        fireEvent.click(loadMore);
    });

    await waitFor(() => expect(getAllByAltText(/listing.*?/i)).toHaveLength(9));
})
