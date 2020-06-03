import express from 'express';
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models'

const app = express();


const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
})

SERVER.applyMiddleware({app})

app.get('/hello',(req, res) => {
    res.send("helljklj")
})

models.sequelize.sync().then(res => {
    app.listen(4000,() => {
        console.log("server started!")
    });
})


