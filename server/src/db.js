import Knex from 'knex';

const filePath = './knexfile';
const config = require(filePath)[process.env.NODE_ENV];
console.log('CONFIG', config);

const KnexInstance = Knex(config);

export default KnexInstance;
