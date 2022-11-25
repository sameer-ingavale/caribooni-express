const { GraphQLUpload } = require('graphql-upload');
const Home = require('./home');

module.exports = {
	Upload: GraphQLUpload,
	Mutation: {
		...Home.Mutation,
	},
	Query: {
		...Home.Query,
	},
};
