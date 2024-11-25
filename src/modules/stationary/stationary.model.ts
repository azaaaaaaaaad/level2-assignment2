
import { Schema, model } from 'mongoose';
import { IStationary } from './stationary.interface';
import validator from 'validator';

const stationarySchema = new Schema<IStationary>({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  brand: { 
    type: String, 
    required: [true, 'brand is required'] 
  },
  price: { 
    type: Number, 
    required: [true, 'price is required'],
    validate: {
      validator: (value: number) => validator.isFloat(value.toString(), { min: 0 }),
      message: 'Price must be a positive number'
    }
  },
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
  description: { 
    type: String, 
    required: [true, 'description is required'] 
  },
  quantity: { 
    type: Number, 
    required: [true, 'quantity is required'] 
  },
  inStock: { 
    type: Boolean, 
    required: [true, 'inStock is required'] 
  },
});

export const StationaryModel = model<IStationary>(
  'Stationary',
  stationarySchema,
);
