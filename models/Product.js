const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
	{
		name: String,
		product_type: String,
		price: String,
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	}
);

module.exports = model('Product', ProductSchema);
