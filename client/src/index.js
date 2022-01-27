import React from 'react';
import {render} from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './components/app';
import { client } from './request';

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,

    document.getElementById('root')
);
