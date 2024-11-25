"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationaryModel = void 0;
const mongoose_1 = require("mongoose");
const stationarySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        validate: {
            validator: function (value) {
                const nameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return nameStr === value;
            },
            message: `{VALUE} is not it capitalize format}`,
        },
    },
    brand: { type: String, required: [true, 'brand is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    category: {
        type: String,
        enum: {
            values: [
                'Writing',
                'Office Supplies',
                'Art Supplies',
                'Educational',
                'Technology',
            ],
            message: 'category is required',
        },
        required: true,
    },
    description: { type: String, required: [true, 'description is required'] },
    quantity: { type: Number, required: [true, 'quantity is required'] },
    inStock: { type: Boolean, required: [true, 'inStock is required'] },
});
exports.StationaryModel = (0, mongoose_1.model)('Stationary', stationarySchema);
