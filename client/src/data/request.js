import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from 'apollo-boost';
import { gql } from 'graphql';
import { ENDPOINT_URL } from './constants';

const client = new ApolloClient({
    link: ApolloLink.from([
        authLink,
        new HttpLink({ uri: ENDPOINT_URL})
    ]),
    cache: new InMemoryCache()
});
