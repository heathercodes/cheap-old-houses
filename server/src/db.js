import Knex from 'knex';
import config from './knexfile';

const KnexInstance = Knex(config);

export default KnexInstance;
