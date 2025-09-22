import express from "express";
import { protect } from "../Middlewares/authMiddleware.js";
import { placeOrder } from "../Controllers/OrderController.js";

const router = express.Router();

router.post("/place", protect, placeOrder); // POST /api/orders/place

export default router;
