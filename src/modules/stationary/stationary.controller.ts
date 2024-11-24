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
        const {stationaryId} = req.params
        const result = await StationaryServices.getSingleStationaryFromDb(stationaryId)
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
        })
    }
};

export const StationaryControllers = {
  createStationary,
  getStationary,
  getSingleStationary,
};
