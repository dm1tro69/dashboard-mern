import {Schema, model} from "mongoose";

const affiliateStatSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    affiliateSales: {
        type: [Schema.Types.ObjectId],
        ref: 'Transaction'
    }
}, {timestamps: true})


export default model('AffiliateStat', affiliateStatSchema)
