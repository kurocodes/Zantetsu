import { icons } from "../../../assets/assets";

export default function TrafficSource() {
  return (
    <div className="bg-[hsl(0,0%,13%)] rounded-md shadow-sm h-full p-4 space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-bgLight/90">Traffic Sources</h2>
        <icons.BsThreeDots className="text-bgLight/50" />
      </div>

      <div className="flex items-center gap-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-12 rounded-[2px]"
            style={{ width: `${item.value}%`, backgroundColor: item.color }}
          ></div>
        ))}
      </div>

      {/* Legend */}
      <div className="w-full space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between text-xs">
            <div className="flex items-center gap-2 text-bgLight/70">
              <span
                className="w-3 h-3 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}
            </div>
            <p className="font-medium text-bgLight/90">
              ${item.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  { name: "Direct Traffic", value: 40, color: "hsl(354,70%,50%,0.1)" },
  { name: "Organic Search", value: 30, color: "hsl(354,70%,50%,0.3)" },
  { name: "Social Media", value: 15, color: "hsl(354,70%,50%,0.5)" },
  {
    name: "Referral Traffic",
    value: 10,
    color: "hsl(354,70%,50%,0.7)",
  },
  {
    name: "Email Campaign",
    value: 5,
    color: "hsl(354,70%,50%,1)",
  },
];
