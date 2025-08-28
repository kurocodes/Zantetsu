import "../styles/Hero.css";

export default function MarqueeText({ text }) {
  return (
    <div className="w-full bg-bgDark text-bgLight font-heading py-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap overflow-hidden">
      <div className="marquee flex gap-10 ">
        <p className="px-6">
          {text}
        </p>
        <p className="px-6">
          {text}
        </p>
      </div>
    </div>
  );
}
