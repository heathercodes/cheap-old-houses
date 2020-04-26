const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.DATABASE_HOST,
        user: process.env.NODE_ENV === 'development' ? 'cheapadmin' : process.env.DATABASE_USER,
        password: process.env.NODE_ENV === 'development' ? 'password' : process.env.DATABASE_PASSWORD,
        database: process.env.NODE_ENV === 'development' ? 'cheaphousesdb' : process.env.DATABASE_NAME,
        port: process.env.NODE_ENV === 'development' ? 5432 : Number(process.env.DATABASE_PORT),
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
