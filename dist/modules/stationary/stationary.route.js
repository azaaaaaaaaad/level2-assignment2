"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationaryRoutes = void 0;
const order_controller_1 = require("./../order/order.controller");
const express_1 = __importDefault(require("express"));
const stationary_controller_1 = require("./stationary.controller");
const router = express_1.default.Router();
//will call controllers
router.post('/create-stationary', stationary_controller_1.StationaryControllers.createStationary);
router.get('/', stationary_controller_1.StationaryControllers.getStationary);
router.get('/:stationaryId', stationary_controller_1.StationaryControllers.getSingleStationary);
router.put('/:stationaryId', stationary_controller_1.StationaryControllers.updateSingleStationary);
router.delete('/:stationaryId', stationary_controller_1.StationaryControllers.deleteSingleStationary);
router.post('/orders', order_controller_1.OrderControllers.createOrder);
exports.StationaryRoutes = router;
