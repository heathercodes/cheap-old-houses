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
        connection: process.env.DB_URL_PROD,
        migrations: {
            directory: `${__dirname}/db/migrations`
        },
        seeds: {
            directory: `${__dirname}/db/seeds`
        }
    },
};
