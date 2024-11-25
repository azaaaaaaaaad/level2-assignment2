"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'email is required'], unique: true },
    product: { type: String, required: [true, 'product is required'] },
    quantity: { type: Number, required: [true, 'number is required'] },
    totalPrice: { type: Number, required: [true, 'number is required'] },
});
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
