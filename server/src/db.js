import Knex from 'knex';
import configuration from './knexfile';

const KnexInstance = Knex(configuration);

export default KnexInstance;
