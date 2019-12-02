const db = require('./db');
const { filterBetween } = require('../utils/filter-between-numbers');

const Query = {
    state: (root, state) => db.where(state).select().from('houses'),
    city: (root, city) => db.where(city).select().from('houses'),
    price: (root, value) => {
        const { price } = value;
        const { min, max } = filterBetween(price);
        return db.whereBetween('price', [min, max]).select().from('houses');
    }
};

module.exports = { Query };
