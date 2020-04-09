import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import App from './components/app';
import { ENDPOINT_URL } from '../src/data/constants';

const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({ uri: ENDPOINT_URL })
    ]),
    cache: new InMemoryCache()
});

render(
    <ApolloProvider client={client}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </ApolloProvider>,

    document.getElementById('root')
);
