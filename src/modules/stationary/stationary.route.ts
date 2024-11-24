
import express from 'express'
import { StudentControllers } from './stationary.controller'

const router = express.Router()

//will call controllers
router.post('/create-stationary', StudentControllers.createStationary)


export const StationaryRoutes = router;