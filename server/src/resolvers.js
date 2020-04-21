import db from './db';
import { priceRange } from './utils/price-range';

const resolvers = {
    Query: {
        region: (root, value) => db.where(value).select().from('houses'),
        city: (root, value) => db.where(value).select().from('houses'),
        price: (root, { price }) => {
            const { min, max } = priceRange(price);
            return db.whereBetween('price', [min, max]).select().from('houses');
        }
    },
};

export default resolvers;
