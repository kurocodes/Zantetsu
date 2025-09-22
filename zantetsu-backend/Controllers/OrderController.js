import Order from "../Models/Order.js";
import asyncHandler from "express-async-handler";

// @desc Place order (COD)
// @route POST /api/orders/place
// @access Private (requires cookie JWT)
export const placeOrder = asyncHandler(async (req, res) => {
  const { products, totalAmount, shippingAddress, paymentMethod } = req.body;

  if (!products || products.length === 0) {
    return res.status(400).json({ message: "No products in order" });
  }

  const order = await new Order({
    user: req.user._id,
    products,
    totalAmount,
    shippingAddress,
    paymentMethod,
  });

  const createdOrder = await order.save();
  res
    .status(201)
    .json({ message: "Order placed successfully", order: createdOrder });
});
