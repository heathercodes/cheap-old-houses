import Knex from 'knex';

const filePath = process.env.NODE_ENV === 'development' ? '../knexfile' : './knexfile';
const config = require(filePath);

const KnexInstance = Knex(config);

export default KnexInstance;
