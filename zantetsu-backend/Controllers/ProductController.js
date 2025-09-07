import Product from "../Models/Product.js";
import asyncHandler from "express-async-handler";

// @desc   Fetch products with optional filters
// @route  GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const {
    productType,
    anime,
    minPrice,
    maxPrice,
    page = 1,
    limit = 20,
  } = req.query;

  let filter = {};

  if (productType) {
    filter.productType = Array.isArray(productType)
      ? { $in: productType }
      : { $in: [productType] };
  }

  if (anime) {
    filter.anime = Array.isArray(anime) ? { $in: anime } : { $in: [anime] };
  }

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  // Calculate pagination values
  const currentPage = Math.max(1, parseInt(page));
  const productsPerPage = Math.max(1, parseInt(limit));
  const skip = (currentPage - 1) * productsPerPage;

  // get total counts of products (for pagination info)
  const totalProducts = await Product.countDocuments(filter);

  // get paginated products
  const products = await Product.find(filter).skip(skip).limit(productsPerPage);

  // calculate total pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  res.status(200).json({
    message: "Products fetched successfully",
    count: products.length,
    totalProducts,
    currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    productsPerPage,
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
