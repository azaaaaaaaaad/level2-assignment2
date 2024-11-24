import { Request, Response } from 'express';
import { StationaryServices } from './stationary.service';

const createStationary = async (req: Request, res: Response) => {
  try {
    const {stationary: stationaryData} = req.body;
    const result = await StationaryServices.createStationaryIntoDb(stationaryData);
    res.status(200).json({
      success: true,
      message: 'Stationary is created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: error.message ||'something went wrong',
        error: error,
      });
  }
};

export const StudentControllers = {
    createStationary,
}
