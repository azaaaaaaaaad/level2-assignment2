
import express from 'express'
import { StationaryControllers } from './stationary.controller'

const router = express.Router()

//will call controllers
router.post('/create-stationary', StationaryControllers.createStationary)

router.get('/', StationaryControllers.getStationary)

router.get('/:stationaryId', StationaryControllers.getSingleStationary)

// router.put('/stationaryId', StationaryControllers.updateSingleStationary)

// router.delete('/stationaryId', StationaryControllers.deleteSingleStationary)


export const StationaryRoutes = router;