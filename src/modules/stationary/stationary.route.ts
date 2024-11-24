
import express from 'express'
import { StationaryControllers } from './stationary.controller'

const router = express.Router()

//will call controllers
router.post('/create-stationary', StationaryControllers.createStationary)

router.get('/', StationaryControllers.getStationary)

router.get('/:stationaryId', StationaryControllers.getSingleStationary)


export const StationaryRoutes = router;