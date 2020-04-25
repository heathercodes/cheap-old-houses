import Knex from 'knex';

const config = require(`${__dirname}/knexfile`);

const env = process.env.NODE_ENV;

const configOptions = config[env];
const KnexInstance = Knex(configOptions);

export default KnexInstance;
