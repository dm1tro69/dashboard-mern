import {Schema, model} from "mongoose";

const transactionSchema = new Schema({
    userId: String,
    cost: String,
    products: {
        type: [Schema.Types.ObjectId],
        of: Number
    }
}, {timestamps: true})

export default model('Transaction', transactionSchema)
