import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StationaryRoutes } from './modules/stationary/stationary.route'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/products/stationary', StationaryRoutes)

const getAController =(req:Request, res:Response) => {
  const a =10
  res.send(a)
}

app.get('/', getAController)

export default app;
