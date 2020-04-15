import { gql } from 'apollo-server-koa';

export default gql`
    type Query {
        region(region: String): [House]
        city(city: String): [House]
        price(price: Int): [House]
    }

    type House {
        id: ID!
        address: String
        region: String
        city: String
        price: Int
        link: String
        image: String
    }
`;
