import Knex from 'knex';

const config = require('./knexfile');

const env = process.env.NODE_ENV;

const configOptions = config[env];
const KnexInstance = Knex(configOptions);

export default KnexInstance;
