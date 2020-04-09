const db = require('./db');
const { priceRange } = require('../utils/price-range');

const Query = {
    region: (root, value) => db.where(value).select().from('houses'),
    city: (root, value) => db.where(value).select().from('houses'),
    price: (root, { price }) => {
        const { min, max } = priceRange(price);
        return db.whereBetween('price', [min, max]).select().from('houses');
    }
};

module.exports = { Query };