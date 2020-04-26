import Knex from 'knex';

import config from './knexfile';
console.log(config);
const KnexInstance = Knex(config);

export default KnexInstance;
