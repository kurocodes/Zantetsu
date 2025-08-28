import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { icons } from "../assets/assets";
import ProductCard from "../components/Products/ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../assets/products";
import PriceTag from "../components/Products/PriceTag";
import QuantitySelector from "../components/Products/QuantitySelector";
import CategoryBadge from "../components/Products/CategoryBadge";

export default function ProductDetails() {
  const { id } = useParams();

  // Dummy product (you’ll replace this later with DB data)
  const product = products[id];

  const [mainImg, setMainImg] = useState(product.images[0]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="border-b border-bgMuted pb-16">
      <div className="text-bgLight font-body p-4 max-w-7xl mx-auto">
        {/* Top Section: Images + Info */}
        <div className="relative flex max-md:flex-col gap-4 md:gap-8">
          {/* Image Gallery */}
          <div>
            <div className="sticky top-20 flex flex-col gap-4">
              <div>
                <img
                  src={mainImg}
                  alt="Main Image"
                  className="w-full rounded-2xl"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <img
                    src={img}
                    alt={`Product Image ${idx}`}
                    className={`w-40 object-cover rounded-xl cursor-pointer ${
                      mainImg === img ? "border-2 border-highlight" : ""
                    }`}
                    key={idx}
                    onClick={() => setMainImg(img)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:mt-6">
            {/* Product Info */}
            <div className="flex flex-col gap-4">
              <h1 className="font-heading text-4xl text-highlight">
                {product.title}
              </h1>
              <p className="text-bgLight/60 text-sm leading-relaxed">
                This is a premium handcrafted Zantetsu katana, forged with
                high-quality steel. Perfect for collectors, martial artists, and
                enthusiasts who admire fine craftsmanship. Every blade carries
                the soul of precision and strength.
              </p>

              {/* Category badges */}
              <CategoryBadge
                category={product.category}
                subCategory={product.subCategory}
              />

              {/* Price */}
              <PriceTag
                price={product.price}
                discountedPrice={product.discountedPrice}
              />

              {/* Quantity Selector */}
              <QuantitySelector />

              {/* Actions */}
              <div className="flex max-xs:flex-col gap-4 mt-3">
                <motion.button
                  className="flex-1 flex gap-2 justify-center items-center bg-highlight text-white py-2 rounded-lg transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <icons.LuShoppingCart className="text-xl" />
                  <span>Add to Cart</span>
                </motion.button>
                <motion.button
                  className="flex-1 bg-accentGold text-bgDark py-2 rounded-lg transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  $ Buy Now
                </motion.button>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-heading text-2xl">Reviews</h2>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-accentGold hover:text-bgDark transition"
                >
                  Add a Review
                </button>
              </div>

              {/* Review Form */}
              <AnimatePresence>
                {showReviewForm && (
                  <motion.form
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-bgMuted p-4 rounded-lg mb-6 flex flex-col gap-3"
                  >
                    <input
                      type="text"
                      placeholder="Review Title"
                      className="p-2 rounded bg-bgSoft text-bgLight focus:outline-none"
                    />
                    <textarea
                      placeholder="Comment"
                      rows="3"
                      className="p-2 rounded bg-bgSoft text-bgLight focus:outline-none"
                    />
                    <input
                      type="file"
                      className="text-sm text-bgLight"
                      multiple
                      accept="image/*"
                    />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-2 rounded bg-bgSoft text-bgLight focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="p-2 rounded bg-bgSoft text-bgLight focus:outline-none"
                    />
                    <button className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-accentGold hover:text-bgDark transition">
                      Submit Review
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Dummy Reviews */}
              <div className="flex flex-col gap-4">
                <div className="bg-bgMuted p-4 rounded-lg">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Amazing Katana</h3>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    This blade feels balanced and powerful, definitely worth it!
                  </p>
                  <span className="text-xs text-gray-400">— John Doe</span>
                </div>

                <div className="bg-bgMuted p-4 rounded-lg">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Collector’s Piece</h3>
                    <div className="text-yellow-400">★★★★☆</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Beautiful craftsmanship, though delivery was a bit slow.
                  </p>
                  <span className="text-xs text-gray-400">— Sakura</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl mb-4">Similar Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard {...products[0]} />
            <ProductCard {...products[1]} />
            <ProductCard {...products[2]} />
            <ProductCard {...products[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
