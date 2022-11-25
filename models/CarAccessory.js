const { Schema, model } = require('mongoose');

const CarAccessorySchema = new Schema(
	{
		name: String,
		category: String,
		price: String,
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	}
);

module.exports = model('CarAccessory', CarAccessorySchema);
