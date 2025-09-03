import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [String],
    productType: {
      type: String,
      enum: ["Action Figure", "Katana", "Keychain", "Poster"],
      required: true,
    },
    anime: {
      type: String,
      enum: ["Naruto", "One Piece", "Bleach", "Dragon Ball Z", "Demon Slayer"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountedPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 1,
      max: 5,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    popularity: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
