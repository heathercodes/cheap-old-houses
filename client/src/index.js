import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/app';
import { client } from './request';

render(
    <ApolloProvider client={client}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </ApolloProvider>,

    document.getElementById('root')
);
