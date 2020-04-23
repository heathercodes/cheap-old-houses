const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    client: "pg",
    // connection: {
    //     database: process.env.DB_NAME,
    //     host: process.env.DB_HOST,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    // },
    connection: process.env.DB_CONN,
    migrations: {
        directory: `${__dirname}/db/migrations`
    },
    seeds: {
        directory: `${__dirname}/db/seeds`
    }
};
