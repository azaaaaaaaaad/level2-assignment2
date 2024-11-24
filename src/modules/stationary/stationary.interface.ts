import { ObjectId } from "mongoose";


export type IStationary = {
  name: string; 
  brand: string; 
  price: number; 
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology'; 
  description: string; 
  quantity: number; 
  inStock: boolean; 
};


export type IOrder = {
  email: string;
  product: ObjectId;  // Product reference (ObjectId)
  quantity: number;
  totalPrice: number;  // Total price (product price * quantity)
}