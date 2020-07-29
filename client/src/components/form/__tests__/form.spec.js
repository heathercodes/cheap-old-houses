import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Form from '../form';

jest.mock('../../../request');

describe('Form component', () => {
    test('renders', () => {
        render(<Form />)
    })
})
