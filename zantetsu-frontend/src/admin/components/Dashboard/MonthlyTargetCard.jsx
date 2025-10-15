import { useEffect, useState } from "react";
import { icons } from "../../../assets/assets";

export default function MonthlyTargetCard() {
  const [progress, setProgress] = useState(0);
  const targetProgress = 85; // percentage

  useEffect(() => {
    const t = setTimeout(() => setProgress(targetProgress), 250);
    return () => clearTimeout(t);
  }, [targetProgress]);

  const radius = 80; // must match the arc radius in the path (see d below)
  const strokeWidth = 24;
  // semicircle length (arc length for 180deg)
  const arcLength = Math.PI * radius;
  const dashOffset = arcLength * (1 - progress / 100);

  // same path as you had (centered horizontally between x=20 and x=180)
  const arcPath = "M 20 100 A 80 80 0 0 1 180 100";

  return (
    <div className="bg-[hsl(0,0%,13%)] rounded-md shadow-sm h-full p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-bgLight/90">Monthly Target</h2>
        <icons.BsThreeDots className="text-bgLight/50" />
      </div>

      {/* Gauge */}
      <div className="relative w-[200px] h-[100px] mx-auto">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* background arc */}
          <path
            d={arcPath}
            fill="none"
            stroke="hsl(354,70%,50%,0.1)"
            strokeWidth={strokeWidth}
          />
          {/* progress arc (use arcLength for dasharray) */}
          <path
            d={arcPath}
            ref={null}
            fill="none"
            stroke="hsl(354,70%,50%,1)"
            strokeWidth={strokeWidth}
            strokeDasharray={arcLength}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset 900ms ease-out" }}
          />
        </svg>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
          <span className="text-xl text-bgLight font-medium">{progress}%</span>
          <p className="text-bgLight/50 text-[10px]">
            <span className="text-green-500">+8.02%</span> from last month
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center w-full">
        <span className="text-xs text-bgLight/90">Great Progress 🎉</span>
        <div className="flex flex-col text-[10px] text-bgLight/50">
          <span className="">our achievement increased by $200,000;</span>
          <span>let's reach 100% next month</span>
        </div>
      </div>

      <div className="flex w-full bg-[hsl(354,70%,50%,0.1)] text-center py-1 rounded-md">
        <div className="w-1/2 border-r border-[hsl(0,0%,23%)] py-1">
          <h3 className="text-bgLight/50 text-[10px]">Target</h3>
          <span className="text-bgLight/90 text-sm">$600,000</span>
        </div>
        <div className="w-1/2 border-l border-[hsl(0,0%,23%)] py-1">
          <h3 className="text-bgLight/50 text-[10px]">Revenue</h3>
          <span className="text-bgLight/90 text-sm">$510,000</span>
        </div>
      </div>
    </div>
  );
}
