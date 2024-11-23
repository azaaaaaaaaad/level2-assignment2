import { Schema, model, connect } from 'mongoose';

export type Stationary = {
  name: string; // Name of the product (e.g., Pen, Notebook, Eraser)
  brand: string; // Brand of the product (e.g., Pilot, Moleskine, Faber-Castell)
  price: number; // Price of the product
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology'; // Category of the product using enum
  description: string; // Brief description of the product
  quantity: number; // Quantity of the product available
  inStock: boolean; // Indicates if the product is in stock
};
