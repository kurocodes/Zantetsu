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
  const products = await Product.find(filter)
    .skip(skip)
    .limit(productsPerPage)
    .select("_id name images discountedPrice price");

  if (!products || products.length === 0) {
    return res.status(404).json({ message: "No products found" });
  }

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

// @desc   Fetch home products (Latest Drops and Most Popular)
// @route  GET /api/products/home
// @access Public
export const getHomeProducts = asyncHandler(async (req, res) => {
  const latest = await Product.find({})
    .sort({ createdAt: -1 })
    .limit(4)
    .select("_id name images discountedPrice price");
  const popular = await Product.find({})
    .sort({ popularity: -1 })
    .limit(4)
    .select("_id name images discountedPrice price");

  if (!latest || latest.length === 0 || !popular || popular.length === 0) {
    return res.status(404).json({ message: "No products found" });
  }

  res.status(200).json({
    message: "Home products fetched successfully",
    latest,
    popular,
  });
});


// @desc Fetch product details
// @route GET /api/products/:productId
// @access Public
export const getProductDetails = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  if (!product || product.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  let similarProducts = [];
  let seenIds = new Set();

  // helper function to fetch with conditions
  const fetchProducts = async (filter) => {
    const results = await Product.find({
      _id: { $ne: productId },
      ...filter,
    })
      .limit(4 - similarProducts.length)
      .select("_id name images discountedPrice price");

    // only add unique products
    results.forEach((p) => {
      if (!seenIds.has(p._id.toString())) {
        similarProducts.push(p);
        seenIds.add(p._id.toString());
      }
    });
  };

  // Step 1: Strictest → title + productType + anime
  if (similarProducts.length < 4) {
    await fetchProducts({
      name: { $regex: product.name, $options: "i" },
      productType: product.productType,
      anime: product.anime,
    });
  }

  // Step 2: Relax → productType + anime
  if (similarProducts.length < 4) {
    await fetchProducts({
      productType: product.productType,
      anime: product.anime,
    });
  }

  // Step 3: Relax → only productType
  if (similarProducts.length < 4) {
    await fetchProducts({
      productType: product.productType,
    });
  }

  // Step 4: If still not enough, just fill with any products
  if (similarProducts.length < 4) {
    await fetchProducts({});
  }

  res.status(200).json({
    message: "Product details fetched successfully",
    product,
    similarProducts,
  });
});
