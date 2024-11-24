import { realpathSync } from 'fs';
import { IStationary } from './stationary.interface';
import { StationaryModel } from './stationary.model';

const createStationaryIntoDb = async (stationary: IStationary) => {
  const result = await StationaryModel.create(stationary);
  return result;
};

const getStationaryIntoDb = async()=>{
    const result = await StationaryModel.find()
    return result;
}

export const StationaryServices = {
    createStationaryIntoDb,
    getStationaryIntoDb,
}