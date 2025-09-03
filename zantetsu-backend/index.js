import express from "express";
import dotenv from "dotenv";
import connectTODB from "./config/db.js";
import productRoutes from "./Routes/ProductsRoute.js";

dotenv.config();
connectTODB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);
// app.use("/api/users", require("./routes/userRoutes.js"));
// app.use("/api/orders", require("./routes/orderRoutes.js"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
