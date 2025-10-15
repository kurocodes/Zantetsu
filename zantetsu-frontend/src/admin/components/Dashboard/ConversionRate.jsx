import { color } from "motion/react";
import { icons } from "../../../assets/assets";

export default function ConversionRate() {

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-[hsl(0,0%,13%)] rounded-md shadow-sm h-full p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-bgLight/90">Conversion Rate</h2>
        <button className="flex items-center gap-1 bg-[hsl(0,0%,23%)] hover:bg-[hsl(0,0%,33%)] text-bgLight/70 text-xs px-2.5 py-1 rounded cursor-pointer">
          <span className="mt-0.5">This Week</span>
          <icons.IoIosArrowDown className="mt-0.5" />
        </button>
      </div>

      <div className="grid grid-cols-5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 pt-1 ${
              index !== 0 ? "border-l border-[hsl(0,0%,23%)]" : ""
            }`}
          >
            <div className={`flex flex-col ${index !== 0 ? "pl-2" : ""}`}>
              <span className="text-bgLight/50 text-[10px] mb-2">
                {item.name}
              </span>
              <span className="text-xl text-bgLight font-medium mb-1">
                {item.value.toLocaleString()}
              </span>
              <span
                className={`text-xs w-fit px-1 py-0.5 rounded ${
                  item.change >= 0
                    ? "text-green-500 bg-green-900/20"
                    : "text-red-300 bg-red-900/20"
                }`}
              >
                {item.change >= 0 ? "+" : ""}{item.change}%
              </span>
            </div>
            <div className="w-full mt-auto rounded-t-lg" style={{ height: `${(item.value/maxValue) * 100}px`, backgroundColor: item.color }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    name: (
      <>
        Product
        <br /> views
      </>
    ),
    value: 25000,
    change: 9,
    color: "hsl(354,70%,50%,0.1)",
  },
  {
    name: (
      <>
        Add to
        <br /> Cart
      </>
    ),
    value: 12000,
    change: 6,
    color: "hsl(354,70%,50%,0.3)",
  },
  {
    name: (
      <>
        Proceed to
        <br /> Checkout
      </>
    ),
    value: 8500,
    change: 4,
    color: "hsl(354,70%,50%,0.5)",
  },
  {
    name: (
      <>
        Completed
        <br /> Purchases
      </>
    ),
    value: 6200,
    change: 7,
    color: "hsl(354,70%,50%,0.7)",
  },
  {
    name: (
      <>
        Abandoned
        <br /> Cart
      </>
    ),
    value: 3000,
    change: -5,
    color: "hsl(354,70%,50%,1)",
  },
];
