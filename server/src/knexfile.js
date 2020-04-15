import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default {
    client: "pg",
    connection: process.env.DB_CONN,
    migrations: {
        directory: `${__dirname}/db/migrations`
    },
    seeds: {
        directory: `${__dirname}/db/seeds`
    }
};
