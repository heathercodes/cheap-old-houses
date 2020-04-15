import fs from 'fs';
import { ApolloServer } from 'apollo-server-koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Koa from 'koa';
import resolvers from './resolvers';
import schema from './schema';

const PORT = 9000;
const app = new Koa();
app.use(cors(), bodyParser());

const typeDefs = [schema];
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

const server = app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});

module.exports = server;
