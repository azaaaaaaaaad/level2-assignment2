"use strict";
// import express, { Application, Request, Response } from 'express'
// import cors from 'cors'
// import { StationaryRoutes } from './modules/stationary/stationary.route'
// import { OrderRoutes } from './modules/order/order.route'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app: Application = express()
// //parser
// app.use(express.json())
// app.use(cors())
// //application routes
// app.use('/api/products', StationaryRoutes)
// app.use('/api/orders', OrderRoutes)
// const getAController =(req:Request, res:Response) => {
//   const a =10
//   res.send(a)
// }
// app.get('/', getAController)
// export default app;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const stationary_route_1 = require("./modules/stationary/stationary.route");
const order_route_1 = require("./modules/order/order.route");
const app = (0, express_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.use('/api/products', stationary_route_1.StationaryRoutes);
app.use('/api/orders', order_route_1.OrderRoutes);
// Placeholder route for testing
const getAController = (req, res) => {
    const a = 10;
    res.send(a);
};
app.get('/', getAController);
exports.default = app;
