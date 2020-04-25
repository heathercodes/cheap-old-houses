const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports = {
    development: {
        client: "pg",
        connection: process.env.DB_URL_DEV,
        migrations: {
            directory: `${__dirname}/db/migrations`
        },
        seeds: {
            directory: `${__dirname}/db/seeds`
        }
    },

    production: {
        client: "pg",
        debug: true,
        connection: {
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: Number(process.env.DATABASE_PORT),
        },
        migrations: {
            directory: `${__dirname}/db/migrations`
        },
        seeds: {
            directory: `${__dirname}/db/seeds`
        }
    },
};
