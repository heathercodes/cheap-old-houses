import db from './db';
import { priceRange } from './utils/price-range';

console.log('DB export', db);

const resolvers = {
    Query: {
        region: (root, value) => {
            return db.raw(`select * from "houses" where "region" = ?`, [value.region]).then((resp) => resp.rows);
        },
        city: (root, value) => {
            return db.raw(`SELECT * FROM "houses" WHERE "city" = ?`, [value.city]).then((resp) => resp.rows);
        },
        price: (root, { price }) => {
            const { min, max } = priceRange(price);

            return db.raw(`SELECT * FROM "houses" WHERE "price" BETWEEN ? AND ?`, [min, max]).then((resp) => resp.rows);
        }
    },
};

export default resolvers;
