import { categories } from "../utils/data";
import { latestProducts, mostPopularProducts } from "../assets/products";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero/Hero";
import ShortIntro from "../components/ShortIntro";
import Newsletter from "../components/Common/Newsletter";
import FAQs from "../components/Common/FAQs";
import Testimonials from "../components/Common/Testimonials";
import Services from "../components/Common/Services";
import ProductSection from "../components/Products/ProductSection";
import { useHomeProducts } from "../hooks/useProducts";

export default function Home() {

  const { data, isLoading, isError } = useHomeProducts();

  return (
    <div className="relative">
      <Hero />

      {/* Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.label}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative w-full bg-bgDark rounded-t-[50px]">
        {/* Handle bar */}
        <div className="sticky top-16 z-20 pt-3 flex justify-center cursor-pointer">
          <div
            className="w-25 h-2 bg-highlight rounded-full hover:scale-110 transition-all duration-200"
            onClick={() => window.scrollTo("top", { behavior: "smooth" })}
          ></div>
        </div>
        <ShortIntro />
        {/* Products Sections */}
        <div className="px-6 py-10 pt-20 space-y-14">
          {!isLoading && !isError && <ProductSection title="Latest Drops" products={data.latest} />}
          {!isLoading && !isError && <ProductSection title="Most Popular" products={data.popular} />}
        </div>
        <Services /> {/* Trust & Service Section */}
        <Testimonials />
        <FAQs />
        <Newsletter />
      </div>
    </div>
  );
}
