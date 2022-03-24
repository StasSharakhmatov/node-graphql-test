import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import keys from './keys';
import mongoose from 'mongoose';
import typeDefs from './Schema/TypeDefs';
import resolvers from './Schema/Resolvers';

async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    server.applyMiddleware({ app });

    mongoose.connect(keys.mongoURI, {useNewUrlParser: true}).then(con => console.log('Connect'));

    app.listen(3000, () => {
        console.log('App running on port 3000');
    });

};

startApolloServer();