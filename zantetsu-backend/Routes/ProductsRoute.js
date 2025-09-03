import express from "express";
import {
  getProducts,
  getHomeProducts,
} from "../Controllers/ProductController.js";

const router = express.Router();

router.get("/", getProducts); // GET /api/products/
router.get("/home", getHomeProducts); // GET /api/products/home

export default router;
