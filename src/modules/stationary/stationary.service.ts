import { IStationary } from './stationary.interface';
import { StationaryModel } from './stationary.model';

const createStationaryIntoDb = async (stationary: IStationary) => {
  const result = await StationaryModel.create(stationary);
  return result;
};

const getStationaryFromDb = async()=>{
    const result = await StationaryModel.find()
    return result;
}

const getSingleStationaryFromDb = async(_id:string) => {
    const result = await StationaryModel.findById({_id})
    return result
}

// const updateSingleStationaryFromDb = async(_id:string) => {
//     const result = await StationaryModel.findByIdAndUpdate(_id)
//     return result
// }

// const deleteSingleStationaryFromDb = async(_id:string) => {
//     const result = await StationaryModel.findByIdAndDelete({_id})
//     return result
// }

export const StationaryServices = {
    createStationaryIntoDb,
    getStationaryFromDb,
    getSingleStationaryFromDb,
    // updateSingleStationaryFromDb,
    // deleteSingleStationaryFromDb,
}