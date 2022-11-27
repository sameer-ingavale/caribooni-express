const { gql } = require('apollo-server-express');

module.exports = gql`
	scalar Upload

	# ENUMS

	enum ProductTypeEnum {
		CAR_SEATS
		STEERING_COVERS
	}

	type Product {
		_id: ID!
		name: String
		product_type: ProductTypeEnum
		price: String
	}

	input AddProductInput {
		name: String!
		price: String!
		product_type: ProductTypeEnum!
	}

	type Query {
		getProducts: [Product]
	}

	type Mutation {
		addProduct(input: AddProductInput): Product
	}
`;
