const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-koa'); 
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Koa = require('koa');

const port = 9000;

const app = new Koa();
app.use(cors(), bodyParser());

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./resolvers');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => console.info(`Server started on port ${port}`));
