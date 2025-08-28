import { useState } from "react";
import { testimonials } from "../../utils/data";
import { icons } from "../../assets/assets";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerPage : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + 1
    );
  };

  // Slice the visible testimonials
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // If at the end and not enough to fill 3, wrap around
  if (visibleTestimonials.length < itemsPerPage) {
    visibleTestimonials.push(
      ...testimonials.slice(0, itemsPerPage - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-16 bg-bgDark text-bgLight">
      <h2 className="max-xs:px-4 text-4xl font-subheading font-bold text-center mb-10">
        Customer Testimonials
      </h2>

      <div className="relative px-16">
        {/* Testimonials Grid */}
        <div className="grid gap-4 md:grid-cols-3 items-stretch">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-bgMuted p-6 rounded-2xl shadow-md transition-transform duration-300 ${
                i === 1 ? "scale-105 border border-accentGold" : "scale-95"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <icons.FaUserCircle className="text-3xl text-accentGold" />
                <span className="font-bold">{t.name}</span>
              </div>
              <div className="flex text-accentGold mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <icons.FaStar key={j} />
                ))}
              </div>
              <p className="text-gray-300">{t.review}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 max-md:left-0 left-6 transform -translate-y-1/2 text-4xl text-bgLight p-3 rounded-full cursor-pointer hover:text-highlight hover:scale-110 transition"
        >
          <icons.IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 max-md:right-0 right-6 transform -translate-y-1/2 text-4xl text-bgLight p-3 rounded-full cursor-pointer hover:text-highlight hover:scale-110 transition"
        >
          <icons.IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
