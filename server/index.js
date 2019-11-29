const fs = require('fs');
require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server-koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Koa = require('koa');
const { router } = require('./src/routes/health');

const PORT = 9000;

const app = new Koa();
app.use(cors(), bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const typeDefs = gql(fs.readFileSync('./src/schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./src/resolvers');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

const server = app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});

module.exports = server;
