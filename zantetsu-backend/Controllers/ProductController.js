import Product from "../Models/Product.js";
import asyncHandler from "express-async-handler";

// @desc   Fetch products with optional filters
// @route  GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const { productType, anime, minPrice, maxPrice } = req.query;

  let filter = {};

  if (productType) {
    filter.productType = productType;
  }

  if (anime) {
    filter.anime = anime;
  }

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  const products = await Product.find(filter);

  res.status(200).json({
    message: "Products fetched successfully",
    count: products.length,
    products,
  });
});
// in frontend send the req with query params like this `/api/products?category=${encodeURIComponent(category)}`

// @desc   Fetch home products (Latest Drops and Most Popular)
// @route  GET /api/products/home
// @access Public
export const getHomeProducts = asyncHandler(async (req, res) => {
  const latest = await Product.find({}).sort({ createdAt: -1 }).limit(4);
  const popular = await Product.find({}).sort({ popularity: -1 }).limit(4);

  res.status(200).json({
    message: "Home products fetched successfully",
    latest,
    popular,
  });
});
