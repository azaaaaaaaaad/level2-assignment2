"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationaryControllers = void 0;
const stationary_service_1 = require("./stationary.service");
const createStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stationary: stationaryData } = req.body;
        const result = yield stationary_service_1.StationaryServices.createStationaryIntoDb(stationaryData);
        // Assuming 'result' contains the necessary fields like _id, name, brand, etc.
        res.status(200).json({
            message: 'Product created successfully',
            success: true,
            data: result,
            timeStamp: new Date().toISOString(), // Include the timestamp
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
const getStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield stationary_service_1.StationaryServices.getStationaryFromDb();
        res.status(200).json({
            message: 'Product retrieved successfully',
            success: true,
            data: result,
            timeStamp: new Date().toISOString(), // Include the timestamp
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
const getSingleStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stationaryId } = req.params;
        const result = yield stationary_service_1.StationaryServices.getSingleStationaryFromDb(stationaryId);
        res.status(200).json({
            message: 'Product retrieved successfully',
            success: true,
            data: result,
            timeStamp: new Date().toISOString(), // Include the timestamp
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
const updateSingleStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stationaryId } = req.params;
        const { price, quantity } = req.body;
        if (price === undefined && quantity === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Please provide price or quantity to update',
            });
        }
        // Prepare the updated data object
        const updatedData = {};
        if (price !== undefined)
            updatedData.price = price;
        if (quantity !== undefined)
            updatedData.quantity = quantity;
        // Call the service to update the product
        const result = yield stationary_service_1.StationaryServices.updateSingleStationaryFromDb(stationaryId, updatedData);
        // Check if the product was found and updated
        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
                error: 'No product found with the provided ID',
            });
        }
        // Return the updated product data
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            data: result, // The updated product data
            timeStamp: new Date().toISOString(), // Include a timestamp of the update
        });
    }
    catch (error) {
        console.log(error);
        // Handle unexpected errors, such as database issues
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
const deleteSingleStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { stationaryId } = req.params;
        const result = yield stationary_service_1.StationaryServices.deleteSingleStationaryFromDb(stationaryId);
        res.status(200).json({
            message: 'Product deleted successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
exports.StationaryControllers = {
    createStationary,
    getStationary,
    getSingleStationary,
    updateSingleStationary,
    deleteSingleStationary,
};
