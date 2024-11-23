import { LintMessage } from './../../../node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/ESLintShared.d';
import { Schema, model, connect } from 'mongoose';
import { Stationary } from './stationary.interface';

const stationarySchema = new Schema<Stationary>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: {
        values: ['Writing','Office Supplies','Art Supplies','Educational','Technology'],
        message: 'category is required'
    },
    required: true
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
