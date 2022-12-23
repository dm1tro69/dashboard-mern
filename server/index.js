import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'
import {dataUser, dataProduct, dataProductStat, dataTransaction} from "./data/index.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductState from "./models/ProductState.js";
import Transaction from "./models/Transaction.js";


dotenv.config()
mongoose.set('strictQuery', false)
const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))
app.use(morgan('common'))



const PORT = process.env.PORT || 9000


app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

const start = async () => {
   try {
       await mongoose.connect(process.env.DB_KEY, () => {
           console.log('db started')
           app.listen(PORT, () => {
               console.log(`Server Port: ${PORT}`)
           })
           // User.insertMany(dataUser)
           // Product.insertMany(dataProduct)
           // ProductState.insertMany(dataProductStat)
           // Transaction.insertMany(dataTransaction)
       })
   }catch (e) {
       console.log(e)
   }
}
start()
