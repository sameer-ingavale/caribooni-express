const { gql } = require('apollo-server-express');

module.exports = gql`
	scalar Upload

	# ENUMS

	enum CategoryEnum {
		CAR_SEATS
		STEERING_COVERS
	}

	type CarAccessory {
		_id: ID!
		name: String
		category: CategoryEnum
		price: String
	}

	input AddCarAccessoryInput {
		name: String!
		price: String!
		category: CategoryEnum!
	}

	type Query {
		getCarAccessories: [CarAccessory]
	}

	type Mutation {
		addCarAccessory(input: AddCarAccessoryInput): CarAccessory
	}
`;
