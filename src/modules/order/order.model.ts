import { IOrder } from "./order.interface";
import { model, Schema } from "mongoose";

const orderSchema = new Schema<IOrder>({
  email : {type: String, required: [true, 'email is required'], unique:true},
  product: {type: String, required: [true, 'product is required']},
  quantity: {type: Number, required: [true, 'number is required']},
  totalPrice: {type: Number, required: [true, 'number is required']},
})

export const OrderModel = model<IOrder>(
  'Order',
  orderSchema,
)