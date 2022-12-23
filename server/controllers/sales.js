import OverallState from "../models/OverallState.js";

export const getSales = async (req, res) => {
    try {
        const overallState = await OverallState.find()
        res.status(200).json(overallState[0])
    }catch (e) {
        res.status(404).json({ message: e.message });
    }
}
