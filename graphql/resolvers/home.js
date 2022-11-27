const Product = require('../../models/Product');

module.exports = {
	Query: {
		getProducts: async (_, args, context) => {
			const products = await Product.find();

			return products;
		},
	},
	Mutation: {
		addProduct: async (_, args, context) => {
			const { name, price, product_type } = args.input;

			const product = {
				name,
				price,
				product_type,
			};

			const newProduct = new Product(product);

			await newProduct.save();

			return newProduct;
		},
	},
};
