import mongoose from "mongoose";
import Product from "../Models/Product.js";
import { products } from "./data.js";

const MONGO_URI = "mongodb+srv://deepak3112:Poke2npika@cluster0.lxfwxcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log(MONGO_URI);

const importData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB...");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Product uploaded successfully");
    process.exit();
  } catch (error) {
    console.error("Error uploading products: ", error);
    process.exit(1);
  }
};

importData();
