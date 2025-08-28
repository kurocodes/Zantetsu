import { assets } from "../../assets/assets";
import MarqueeText from "../MarqueeText";

export default function Hero() {
  return (
    <div className="">
      {/* Background Image */}
      <img src={assets.hero_image} alt="" className="w-full h-full" />

      {/* Sliding Text Carousel */}
      <MarqueeText
        text={
          <>
            <span className="text-highlight">ZANTETSU</span> — Cut Through
            Ordinary Collecting •{" "}
            <span className="text-accentGold">
              Premium Anime Action Figures.
            </span>{" "}
            Sharp Detail. Fierce Passion
          </>
        }
      />
    </div>
  );
}
