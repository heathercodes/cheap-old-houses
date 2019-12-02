const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
    client: "pg",
    connection: process.env.DB_CONN,
    migrations: {
        directory: `${__dirname}/db/migrations`
    },
    seeds: {
        directory: `${__dirname}/db/seeds`
    }
};
