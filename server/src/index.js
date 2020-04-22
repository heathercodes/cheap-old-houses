import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express, { Router } from 'express';
import path from 'path';
import resolvers from './resolvers';
import schema from './schema';

const router = Router();
const PORT = 9000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client")));
app.use(router);

const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

const server = app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});

module.exports = server;
