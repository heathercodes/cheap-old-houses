module.exports = {
    client: 'pg',
    connection: {
        host: process.env.NODE_ENV === 'production' ? process.env.DATABASE_HOST : '127.0.0.1',
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: Number(process.env.DATABASE_PORT),
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: './db/migrations',
        tableName: 'migrations',
    },
    seeds: {
        directory: './db/seeds',
    }
};
