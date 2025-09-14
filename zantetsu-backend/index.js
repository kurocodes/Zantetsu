import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectTODB from "./config/db.js";

import productRoutes from "./Routes/ProductsRoute.js";
import authRoutes from "./Routes/AuthRoutes.js";
import { errorHandler } from "./Middlewares/errorMiddleware.js";

dotenv.config();
connectTODB();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/orders", require("./routes/orderRoutes.js"));
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
