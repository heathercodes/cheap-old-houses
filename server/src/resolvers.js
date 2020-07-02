import { query } from './db';
import { priceRange } from './utils/price-range';

const resolvers = {
    Query: {
        region: (root, value) => {
            return query('select * from "houses" where "region" = $1', [value.region])
                .then((resp) => resp.rows)
                .catch((err) => {
                    console.log(err);
                });
        },
        city: (root, value) => {
            return query('SELECT * FROM "houses" WHERE "city" = $1', [value.city])
                .then((resp) => resp.rows)
                .catch((err) => {
                    console.log(err);
                });
        },
        price: (root, { price }) => {
            const { min, max } = priceRange(price);

            return query('SELECT * FROM "houses" WHERE "price" BETWEEN $1 AND $2', [min, max])
                .then((resp) => resp.rows)
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};

export default resolvers;
