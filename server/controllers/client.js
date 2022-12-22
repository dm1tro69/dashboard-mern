import Product from "../models/Product.js";
import ProductState from "../models/ProductState.js";


// export const getProducts = async (req, res) => {
//     try {
//        const products = await Product.find()
//         const productsWithState = await Promise.all(
//             products.map(async (product) => {
//                 const stat = ProductState.find({
//                     productId: product._id
//                 })
//                 return {
//                     ...product._doc,
//                     stat,
//                 }
//             })
//         )
//         res.status(200).json(productsWithState)
//     }catch (e) {
//         res.status(404).json({message: e.message})
//     }
// }
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductState.find({
                    productId: product._id,
                });
                return {
                    ...product._doc,
                    stat,
                };
            })
        );

        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
