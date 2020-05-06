import Knex from 'knex';

const filePath = process.env.NODE_ENV === 'production' ? './knexfile' : '../knexfile';
const config = require(filePath);

const KnexInstance = Knex(config);

export default KnexInstance;
