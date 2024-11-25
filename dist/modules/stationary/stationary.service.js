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
exports.StationaryServices = void 0;
const stationary_model_1 = require("./stationary.model");
const createStationaryIntoDb = (stationary) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.create(stationary);
    return result;
});
const getStationaryFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.find();
    return result;
});
const getSingleStationaryFromDb = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.findById({ _id });
    return result;
});
const updateSingleStationaryFromDb = (stationaryId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield stationary_model_1.StationaryModel.findByIdAndUpdate(stationaryId, updatedData, { new: true });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
        throw new Error('Failed to update product');
    }
});
const deleteSingleStationaryFromDb = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.findByIdAndDelete({ _id });
    return result;
});
exports.StationaryServices = {
    createStationaryIntoDb,
    getStationaryFromDb,
    getSingleStationaryFromDb,
    updateSingleStationaryFromDb,
    deleteSingleStationaryFromDb,
};
