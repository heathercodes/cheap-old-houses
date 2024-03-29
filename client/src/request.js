
import gql from 'graphql-tag';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { REGION, CITY, PRICE } from './data/constants';
import { ENDPOINT_URL } from '../src/data/constants';

export const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({ uri: ENDPOINT_URL, fetch })
    ]),
    cache: new InMemoryCache()
});

const regionQuery = gql`query($region: String) {
    region(region: $region) {
        id
        address
        region
        city
        price
        link
        image
    }
}`;

const cityQuery = gql`query($city: String) {
    city(city: $city) {
        id
        address
        region
        city
        price
        link
        image
    }
}`;

const priceQuery = gql`query($price: Int) {
    price(price: $price) {
        id
        address
        region
        city
        price
        link
        image
    }
}`;

const selectQuery = value => {
    switch (value) {
        case REGION: {
            return regionQuery;
        }

        case CITY: {
            return cityQuery;
        }

        case PRICE: {
            return priceQuery;
        }
    }
}

export async function searchForHouses(searchParams) {
    const [key, value] = Object.entries(searchParams)[0];
    const query = selectQuery(key);

    try {
        const { data } = await client.query({ query, variables: { [key]: value } })

        return data[key];
    } catch(err) {
        throw new Error('could not find data', err);
    }
}
