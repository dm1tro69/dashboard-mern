import {Schema, model} from "mongoose";

const productStateSchema = new Schema({
     productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number
        }
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number
    }

}, {timestamps: true})

export default model('ProductState', productStateSchema)
