const fs = require('fs');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server-koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Koa = require('koa');

const PORT = 9000;

const app = new Koa();
app.use(cors(), bodyParser());

const filePath = path.join(__dirname, '/src/schema.graphql');
const typeDefs = gql(fs.readFileSync(filePath, { encoding: 'utf8' }));
const resolvers = require('./src/resolvers');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

const server = app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});

module.exports = server;
