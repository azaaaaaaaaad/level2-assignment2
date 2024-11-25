import { IStationary } from './stationary.interface';
import { StationaryModel } from './stationary.model';

const createStationaryIntoDb = async (stationary: IStationary) => {
  const result = await StationaryModel.create(stationary);
  return result;
};

const getStationaryFromDb = async () => {
  const result = await StationaryModel.find();
  return result;
};

const getSingleStationaryFromDb = async (_id: string) => {
  const result = await StationaryModel.findById({ _id });
  return result;
};

const updateSingleStationaryFromDb = async (
  stationaryId: string,
  updatedData: any,
) => {
  try {
    const updatedProduct = await StationaryModel.findByIdAndUpdate(
      stationaryId,
      updatedData,
      { new: true },
    );
    return updatedProduct;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update product');
  }
};

const deleteSingleStationaryFromDb = async (_id: string) => {
  const result = await StationaryModel.findByIdAndDelete({ _id });
  return result;
};

export const StationaryServices = {
  createStationaryIntoDb,
  getStationaryFromDb,
  getSingleStationaryFromDb,
  updateSingleStationaryFromDb,
  deleteSingleStationaryFromDb,
};
