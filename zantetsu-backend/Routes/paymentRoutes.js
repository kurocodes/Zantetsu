import express from "express";
import Stripe from "stripe";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// desc   Create a payment intent
// @route POST /api/payments/create-intent
// @access Private (requires cookie JWT)
router.post("/create-intent", protect, async (req, res) => {
  try {
    const { amount, currency = "usd" } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      payment_method_types: ["card"],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log("Stripe error: ", error);
    res.status(500).json({ error: "Payment creation failed" });
  }
});

export default router;