import { icons } from "../assets/assets";

export default function CategoryCard({ image, title }) {
  return (
    <div className="group relative w-full h-auto rounded-2xl overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full rounded-2xl group-hover:scale-120 transition-all duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-bgDark opacity-50 rounded-2xl"></div>
      <div className="absolute top-0 left-0 w-full h-full place-content-center place-items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-bgLight font-subheading font-bold text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl lg:translate-y-5 group-hover:translate-y-0 transition-all duration-300">
            {title}
          </h1>
          <span className="p-3 rounded-full text-xl bg-highlight text-bgLight lg:opacity-0 group-hover:opacity-100 hover:bg-accentGold transition-all duration-200">
            <icons.FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
