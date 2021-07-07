import { Pool } from 'pg';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
const client = new SecretManagerServiceClient();

export async function accessSecret(secret) {
    const [accessResponse] = await client.accessSecretVersion({
        name: secret,
    });

    return accessResponse.payload.data.toString('utf8');
}

const connections = async (env) => {
    const dbAccess = {
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
            password: await accessSecret('projects/323921220687/secrets/cheap-old-houses-postgres-password/versions/1'),
            database: process.env.POSTGRES_DB,
        }
    };

    return dbAccess[env];
};

const query = async () => {
    const config = await connections(process.env.NODE_ENV);
    const pool = new Pool(config);
    const query = (text, params, callback) => pool.query(text, params, callback);
    return query;
};

export { query };
