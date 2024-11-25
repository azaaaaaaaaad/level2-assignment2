

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StationaryRoutes } from './modules/stationary/stationary.route';
import { OrderRoutes } from './modules/order/order.route';

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/products', StationaryRoutes);
app.use('/api/orders', OrderRoutes);

// Placeholder route for testing
const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);


export default app;

