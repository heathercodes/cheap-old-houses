import { gql } from 'apollo-server-express';

export default gql`
    type House {
        id: ID!
        address: String
        region: String
        city: String
        price: Int
        link: String
        image: String
    }

    type Query {
        region(region: String): [House]
        city(city: String): [House]
        price(price: Int): [House]
    }
`;
