
import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

// Service function to create an order in the database
const createOrderIntoDb = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderServices = {
  createOrderIntoDb
};
