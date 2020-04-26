const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.NODE_ENV === 'development' ? '127.0.0.1' : process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: Number(process.env.DATABASE_PORT),
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: process.env.NODE_ENV === 'development' ? '../db/migrations' : './db/migrations',
        tableName: 'migrations',
    },
    seeds: {
        directory: process.env.NODE_ENV === 'development' ? '../db/seeds' : './db/seeds',
    }
};
