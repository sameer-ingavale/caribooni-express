const CarAccessory = require('../../models/CarAccessory');

module.exports = {
	Query: {
		getCarAccessories: async (_, args, context) => {
			const carAccessories = await CarAccessory.find();

			return carAccessories;
		},
	},
	Mutation: {
		addCarAccessory: async (_, args, context) => {
			const { name, price, category } = args.input;

			const carAccessory = {
				name,
				price,
				category,
			};

			const newCarAccessory = new CarAccessory(carAccessory);

			await newCarAccessory.save();

			return newCarAccessory;
		},
	},
};
