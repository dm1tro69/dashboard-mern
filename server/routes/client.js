import {Router} from "express";
import {getCustomers, getGeography, getProducts, getTransaction} from "../controllers/client.js";

const router = Router()

router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/transactions', getTransaction)
router.get('/geography', getGeography)

export default router
