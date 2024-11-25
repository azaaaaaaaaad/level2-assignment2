import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// // router.post('/create-stationary', StationaryControllers.createStationary)
router.post('/orders', OrderControllers.createOrder);

export const OrderRoutes = router;
