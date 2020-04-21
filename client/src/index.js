import React from 'react';
import {render} from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/app';
import { client } from './request';

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,

    document.getElementById('root')
);
