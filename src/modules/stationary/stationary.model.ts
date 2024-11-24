
import { Schema, model } from 'mongoose';
import { IStationary } from './stationary.interface';

const stationarySchema = new Schema<IStationary>({
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



export const StationaryModel =  model<IStationary>('Stationary', stationarySchema)