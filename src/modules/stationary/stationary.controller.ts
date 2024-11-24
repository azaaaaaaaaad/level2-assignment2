// import { Request, Response } from 'express';
// import { StationaryServices } from './stationary.service';
// import { timeStamp } from 'console';

// const createStationary = async (req: Request, res: Response) => {
//   try {
//     const { stationary: stationaryData } = req.body;
//     const result =
//       await StationaryServices.createStationaryIntoDb(stationaryData);
//     res.status(200).json({
//       message: 'Stationary is created successfully',
//       success: true,
//       data: result,
//       timeStamp,
//     });
//   } catch (error: any) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: error.message || 'something went wrong',
//       error: error,
//     });
//   }
// };

// export const StudentControllers = {
//   createStationary,
// };



import { Request, Response } from 'express';
import { StationaryServices } from './stationary.service';

const createStationary = async (req: Request, res: Response) => {
  try {
    const { stationary: stationaryData } = req.body;
    const result = await StationaryServices.createStationaryIntoDb(stationaryData);

    // Assuming 'result' contains the necessary fields like _id, name, brand, etc.
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: {
        _id: result._id,
        name: result.name,
        brand: result.brand,
        price: result.price,
        category: result.category,
        description: result.description,
        quantity: result.quantity,
        inStock: result.inStock,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      },
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

export const StudentControllers = {
  createStationary,
};
