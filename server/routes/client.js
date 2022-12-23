import {Router} from "express";
import {getCustomers, getProducts, getTransaction} from "../controllers/client.js";

const router = Router()

router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/transactions', getTransaction)

export default router
