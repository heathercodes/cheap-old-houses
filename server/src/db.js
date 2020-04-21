import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const config = {
    client: "pg",
    connection: process.env.DB_CONN,
    migrations: {
        directory: `${__dirname}/db/migrations`
    },
    seeds: {
        directory: `${__dirname}/db/seeds`
    }
};

const KnexInstance = Knex(config);

export default KnexInstance;
