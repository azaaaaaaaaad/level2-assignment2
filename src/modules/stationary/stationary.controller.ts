import { Request, Response } from 'express';
import { StationaryServices } from './stationary.service';

const createStationary = async (req: Request, res: Response) => {
  try {
    const { stationary: stationaryData } = req.body;

    const result =
      await StationaryServices.createStationaryIntoDb(stationaryData);

    // Assuming 'result' contains the necessary fields like _id, name, brand, etc.
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
      timeStamp: new Date().toISOString(), // Include the timestamp
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const getStationary = async (req: Request, res: Response) => {
  try {
    const result = await StationaryServices.getStationaryFromDb();
    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
      timeStamp: new Date().toISOString(), // Include the timestamp
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const getSingleStationary = async (req: Request, res: Response) => {
  try {
    const { stationaryId } = req.params;
    const result =
      await StationaryServices.getSingleStationaryFromDb(stationaryId);
    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
      timeStamp: new Date().toISOString(), // Include the timestamp
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const updateSingleStationary = async (req: Request, res: Response) => {
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
    const updatedData: any = {};
    if (price !== undefined) updatedData.price = price;
    if (quantity !== undefined) updatedData.quantity = quantity;

    // Call the service to update the product
    const result = await StationaryServices.updateSingleStationaryFromDb(
      stationaryId,
      updatedData,
    );

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
  } catch (error: any) {
    console.log(error);
    // Handle unexpected errors, such as database issues
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const deleteSingleStationary = async (req: Request, res: Response) => {
  try {
    const { stationaryId } = req.params;
    const result =
      await StationaryServices.deleteSingleStationaryFromDb(stationaryId);
    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const StationaryControllers = {
  createStationary,
  getStationary,
  getSingleStationary,
  updateSingleStationary,
  deleteSingleStationary,
};
