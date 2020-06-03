import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();


const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
})

SERVER.applyMiddleware({app})

app.get('/hello',(req, res) => {
    res.send("helljklj")
})

app.listen(4000,() => {
    console.log("lsdkfj")
});

