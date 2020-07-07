import { Pool } from 'pg';

const connections = {
    development: {
        host: '127.0.0.1',
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: Number(process.env.POSTGRES_PORT),
    },
    production: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    }
};

const config = connections[process.env.NODE_ENV];
const pool = new Pool(config);
const query = (text, params, callback) => pool.query(text, params, callback);

export { query };
