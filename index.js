const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers/index');
const connectDB = require('./config/database');
require('dotenv').config();
const { graphqlUploadExpress } = require('graphql-upload'); // The Express middleware

const app = express();

/* app.use(express.json({ limit: '5mb' })); */

connectDB();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req }), // Forward the req payload to all resolvers
	uploads: false,
});

const corsOptions = {
	origin: true,
	credentials: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	optionsSuccessStatus: 200,
};

/* app.use(express.json()); */

app.use(graphqlUploadExpress());

server.applyMiddleware({ app, path: '/', cors: corsOptions });

const port = process.env.PORT || 8000;

app.listen(port, async () => {
	console.log(`Listening on port ${port}`);
	// add code to re-schedule jobs for all active campaigns with recurring set to true
});
