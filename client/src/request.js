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

const houseDetailFragment = gql`
  fragment HouseDetail on House {
    id
    address
    state
    city
    price
    link
    image
  }
`;

const stateQuery = gql`query($state: String) {
    state(state: $state) {
        ...HouseDetail
    }
    ${houseDetailFragment}
}`;

const cityQuery = gql`query($city: String) {
    city(city: $city) {
        ...HouseDetail
    }
    ${houseDetailFragment}
}`;

const priceQuery = gql`query($price: Int) {
    price(price: $price) {
        ...HouseDetail
    }
    ${houseDetailFragment}
}`;

export async function searchHouseByState(region) {
    const query = stateQuery;
    const { data: { state } } = await client.query({ query, variables: region })
    return state;
}

export async function searchHouseByCity(town) {
    const query = cityQuery;
    const { data: { city } } = await client.query({ query, variables: town })
    return city;
}

export async function searchHouseByState(value) {
    const query = priceQuery;
    const { data: { price } } = await client.query({ query, variables: value })
    return price;
}
